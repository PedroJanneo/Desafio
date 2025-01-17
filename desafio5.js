// Função que inverte os caracteres de uma string
function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

// Exemplo de uso
const stringOriginal = "Exemplo de string";
const stringInvertida = inverterString(stringOriginal);

console.log("String original: " + stringOriginal);
console.log("String invertida: " + stringInvertida);