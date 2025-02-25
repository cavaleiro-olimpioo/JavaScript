var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são ${hora} horas e ${min} minutos`)

console.log(`Agora são`)
if (hora >= 6 && hora < 12){
    console.log('Bom dia!')
}else{
    if (hora >= 12 && hora < 18){
        console.log('Boa tarde!')
    }else{
        if (hora >= 18 && hora < 6){
            console.log('Boa noite!')
        }
    }
}