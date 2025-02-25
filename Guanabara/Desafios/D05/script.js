var ra = []
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){
    var txtnum = document.querySelector('input#iana')
    var num = Number(txtnum.value)
    if (num < 1 || num > 100 || inLista(num, ra)){
        window.alert('[ERRO] Valor invalido ou ja existente')
    }else{
        var res = document.getElementsByTagName('select')[0]
        ra.push(Number(num))
        res.innerHTML += `<option>Valor ${num} adicionado</option>`
        num = ''
        num.focus()
    }
    
}


function resultado(){
    if (ra <= 0 || ra.length === 0){
        window.alert('[ERRO] Nenhum valor encontrado')
    }else{
        let div = document.querySelector('div#resul')
        div.innerHTML += `<p>Ao todo, temos ${ra.length} números cadastrados</p>`
        div.innerHTML += `<p>O maior valor foi ${ra[ra.length-1]}</p>`
        div.innerHTML += `<p>O menor valor foi ${ra[0]}</p>`
    }
}

