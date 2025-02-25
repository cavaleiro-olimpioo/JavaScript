function clicar(){
    var txtinicio = document.querySelector('input#iinicio') //identifica a o input do inicio
    var txtfim = document.querySelector('input#ifim') //identifica a o input do fim
    var txtpasso = document.querySelector('input#ipasso') //identifica a o input do passo
    var res = document.getElementsByTagName('p')[0] //Paragráfo do resultado
    var inicio = Number(txtinicio.value) //Resultado do input inicio
    var fim = Number(txtfim.value) //Resultado do input fim
    var passo = Number(txtpasso.value) //Resultado do input passo

    res.innerText = '' //Deixa a caixa de texto vazia

    if(inicio <= 0 || fim <= 0 || passo <= 0){
        window.alert('[ERRO] Confira o formulário e tente novamente')
    }else{

        if(passo <= 0){
            window.alert('[ERRO] Os valores de passo não podem ser menor ou igual a 0')
        }else{
            if(inicio <= fim){
                while(inicio <= fim){
                    res.innerHTML += `${inicio}👉`
                    inicio += passo
                }
            }else{
                while(inicio >= fim){
                    res.innerHTML += `${inicio}👉`
                    inicio -= passo
                }
            }
            res.innerHTML += '🏁'
        }
    }
}