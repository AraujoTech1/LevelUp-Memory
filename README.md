# 🎮 LevelUp Memory – Jogo de Memória Inteligente


## Descrição

**LevelUp Memory** é um jogo de memória online com níveis de dificuldade adaptativos e IA integrada, desenvolvido com foco em jogabilidade, usabilidade e personalização da experiência.  
Utilizando tecnologias de ponta como Azure e TensorFlow.js, o jogo identifica o estilo cognitivo da pessoa jogadora com base em seu desempenho e fornece feedbacks personalizados e motivadores.

## Tecnologias Utilizadas

- 🎨 **Frontend:** Vue 3 
- 🎮 **Estilo:** CSS puro com tema dark 
- 🤖 **IA Generativa:** GPT-3.5 
- 🧠 **Análise Cognitiva:** TensorFlow.js rodando diretamente no navegador
- 🗣️ **NLP (Processamento de Linguagem):** Azure Language Studio 
- ☁️ **Hospedagem:** Azure Static Web Apps

## Processo de Criaçã

1. **Ideação:** O projeto nasceu da ideia de unir diversão com personalização inteligente.  
2. **Prototipação:** Um jogo de memória simples foi estruturado em Vue 3 com uma grade de cartas embaralhadas.  
3. **Medição de desempenho:** A cada jogada, o jogo registra acertos, erros e tempo de resposta.  
4. **IA Cognitiva com TensorFlow.js:** Um modelo leve identifica padrões e prediz o estilo cognitivo do jogador: *visual*, *lógico* ou *impulsivo*.  
5. **Feedback com GPT-3.5:** O estilo é enviado para uma Azure Function, que usa GPT-3.5 para gerar um feedback motivador e adaptado ao estilo da jogadora ou jogador.  
6. **Design:** O estilo visual foi inspirado em jogos modernos, com um toque de neon/dourado e fundo escuro para imersão total.  

## Resultados

- ✔️ Jogo 100% funcional e responsivo.
- ✔️ IA no navegador sem necessidade de backend pesado.
- ✔️ Feedbacks realmente personalizados e positivos, tornando a experiência única.
- ✔️ Arquitetura leve, ideal para demonstrações de IA embarcada + serverless.
- ✔️ Pode ser publicado facilmente no GitHub Pages ou Azure Static Web Apps.


