//detector de numeros impares e pares
function detector(num){
    let res = num%2
    if(res == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
let resultado = detector(3)
console.log(resultado)