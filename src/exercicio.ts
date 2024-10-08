function multiplicar(num1: number, num2: number): number{
    return num1 * num2;
}

function saudacao(nome: string): string{
    return `Olá ${nome}`;
}

const resultMulti = multiplicar(2,5);
const resultSaudacao = saudacao("Thiago");

console.log(resultMulti);
console.log(resultSaudacao);
