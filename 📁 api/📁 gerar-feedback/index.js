module.exports = async function (context, req) {
  const { acertos, erros, tempo } = req.body;

  let feedback = "Bom trabalho!";
  if (acertos / (acertos + erros) < 0.5) {
    feedback = "Tente melhorar a sua memória!";
  }

  context.res = {
    status: 200,
    body: { feedback }
  };
};
