const fn = require('./funcoes');

test('Contagem de caracteres',() => {
    const frase = 'Final da Champions League.';
    expect(fn.contarCaracteres(frase)).toBe(26);
});

test('Mostrar o maior número de uma série',()=>{
    const vnumeros = [2,3,65,100,4,-89,2570];
    expect(fn.mostrarMaiorNumero(vnumeros)).toBe(2570);
});

test('Mostrar se um número positivo é par',()=>{
    //expect(fn.checarSeEhPar(11)).not.toBeTruthy();
    expect(fn.checarSeEhPar(11)).toBeFalsy();
    //expect(fn.checarSeEhPar(11)).toBe(false);
});

test('Mostrar se um número negativo é par',()=>{
    expect(fn.checarSeEhPar(-2)).toBeTruthy();
});

test('Mostrar se um número positivo par é par',()=>{
    expect(fn.checarSeEhPar(20)).toBeTruthy();
});