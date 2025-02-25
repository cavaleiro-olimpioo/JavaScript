var idade = 125
if (idade < 16){
    console.log('Você não pode Votar!')
}else{
    if (idade >= 16 && idade < 18 || idade >= 70){
        console.log('Seu voto é opicional')
    }else{
        if (idade >= 18 && idade < 70){
            console.log('Seu voto é obrigatório')
        }
    }
}