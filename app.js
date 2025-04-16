const { createApp } = Vue;

createApp({
  data() {
    return {
      emojis: ['🐶', '🐱', '🦊', '🐻', '🐸', '🐵', '🐧', '🐯'],
      board: [],
      flippedCards: [],
      feedback: '',
      totalFlips: 0,
      startTime: null,
    };
  },
  mounted() {
    this.resetGame();
  },
  methods: {
    resetGame() {
      const cards = this.emojis.concat(this.emojis).map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false,
      }));
      this.board = this.shuffle(cards);
      this.flippedCards = [];
      this.feedback = '';
      this.totalFlips = 0;
      this.startTime = Date.now();
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    flipCard(card) {
      if (card.flipped || card.matched || this.flippedCards.length === 2) return;

      card.flipped = true;
      this.flippedCards.push(card);
      this.totalFlips++;

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.checkMatch();
        }, 800);
      }
    },
    checkMatch() {
      const [card1, card2] = this.flippedCards;
      if (card1.value === card2.value) {
        card1.matched = true;
        card2.matched = true;
      } else {
        card1.flipped = false;
        card2.flipped = false;
      }
      this.flippedCards = [];

      if (this.board.every(card => card.matched)) {
        const duration = (Date.now() - this.startTime) / 1000;
        const accuracy = (this.emojis.length / this.totalFlips).toFixed(2);
        this.analyzePerformance(duration, accuracy);
      }
    },
    analyzePerformance(duration, accuracy) {
      let feedback = '';

      if (accuracy >= 0.6 && duration <= 60) {
        feedback = "Parabéns! Sua memória está afiada 👏";
      } else {
        feedback = "Vamos praticar mais! Sua memória pode melhorar 💪";
      }

      this.feedback = feedback;
    }
  }
}).mount('#app');
