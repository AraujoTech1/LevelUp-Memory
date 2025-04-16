// Simulação simples de análise do estilo cognitivo do jogador
function analisarDesempenho(jogador) {
  const { tempo, acertos, erros } = jogador;
  let estilo = "impulsivo";

  if (acertos / (acertos + erros) > 0.8) {
      estilo = "visual";
  } else if (tempo < 30) {
      estilo = "lógico";
  }

  return estilo;
}

// Exemplo de adaptação da dificuldade
function adaptarDificuldade(estilo) {
  if (estilo === "visual") {
      console.log("Aumentando a complexidade visual...");
  } else if (estilo === "lógico") {
      console.log("Adicionando desafios lógicos...");
  } else {
      console.log("Aumentando a velocidade das cartas...");
  }
}
