function contarCaracteres(str){
    return str.length;
}

function mostrarMaiorNumero(arr){
    return Math.max(...arr);
}

function checarSeEhPar(n){
    return (n % 2 == 0);
}

module.exports = {contarCaracteres, mostrarMaiorNumero, checarSeEhPar};