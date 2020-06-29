const calculate = (capital, juros, periodo) => {
  juros = juros / 100;

  return (capital * (1 + juros) ** periodo).toFixed(2);
};

const calculateJuros = (totalAnterior, totalAtual) => {
  return (((totalAtual - totalAnterior) / totalAnterior) * 100).toFixed(2);
};

export { calculate, calculateJuros };
