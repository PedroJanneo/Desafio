const fs = require('fs');

// Lê o arquivo JSON
const rawData = fs.readFileSync('dados.json');
const faturamentoDiario = JSON.parse(rawData);

// Filtra os dias com faturamento maior que zero
const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);

// Calcula o menor e maior valor de faturamento
let menorValor = diasComFaturamento[0].valor;
let maiorValor = diasComFaturamento[0].valor;
for (let i = 1; i < diasComFaturamento.length; i++) {
    if (diasComFaturamento[i].valor < menorValor) {
        menorValor = diasComFaturamento[i].valor;
    }
    if (diasComFaturamento[i].valor > maiorValor) {
        maiorValor = diasComFaturamento[i].valor;
    }
}

// Calcula a média mensal de faturamento
let somaFaturamento = 0;
for (let i = 0; i < diasComFaturamento.length; i++) {
    somaFaturamento += diasComFaturamento[i].valor;
}
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Calcula o número de dias com faturamento acima da média mensal
let diasAcimaDaMedia = 0;
for (let i = 0; i < diasComFaturamento.length; i++) {
    if (diasComFaturamento[i].valor > mediaMensal) {
        diasAcimaDaMedia++;
    }
}

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);