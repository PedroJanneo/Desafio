// Valores de faturamento mensal por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o valor total de faturamento
let totalFaturamento = 0;
for (let estado in faturamentoPorEstado) {
    totalFaturamento += faturamentoPorEstado[estado];
}

// Calcula e imprime o percentual de representação de cada estado
for (let estado in faturamentoPorEstado) {
    let percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}