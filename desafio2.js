let numero2 = 21;

// Função para verificar se um número pertence à sequência de Fibonacci usando um loop for
function isFibonacci(num) {
    let a = 0, b = 1;
    for (let i = 0; a <= num; i++) {
        if (a === num) {
            return true;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }
    return false;
}

if (isFibonacci(numero2)) {
    console.log(`O número ${numero2} faz parte da sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero2} não faz parte da sequência de Fibonacci.`);
}