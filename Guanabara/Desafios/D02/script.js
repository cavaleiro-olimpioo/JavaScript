function clicar(){
    var agora = new Date()
    var ano = document.querySelector('input#inas').value
    var idade = agora.getFullYear() - ano
    var res = document.querySelector('p.res')
    var sexo = document.getElementsByName('sexo')
    var genero = ''
    var image = document.getElementById('image')
    if (ano.length == 0 || ano > agora.getFullYear()){
        window.alert('[ERRO] Por favor, confira o formulário e tente novamente')
    }else{
        if (sexo[0].checked){
            var genero = 'homem'
            if (idade < 5){ //bebê
                image.src ='estilos/imagens/bebe m.jpg'
            }else if (idade >= 5 && idade < 13){ //criança
                image.src ='estilos/imagens/criança m.jpg'    
            }else if (idade >= 13 && idade < 18){ //adolescente
                image.src ='estilos/imagens/adolecente m.jpg'
            }else if (idade >= 18 && idade < 60){ //adulto
                image.src ='estilos/imagens/adulto.jpg'
            }else if (idade >= 60){ //idoso
                image.src ='estilos/imagens/idoso.jpg'
            }
        }else if (sexo[1].checked){
            var genero = 'mulher'
            if (idade >= 0 && idade < 5){ //bebê
                image.src ='estilos/imagens/bebe f.jpg'
            }else if (idade >= 5 && idade < 13){ //criança
                image.src ='estilos/imagens/criança f.jpg'    
            }else if (idade >= 13 && idade < 18){ //adolescente
                image.src ='estilos/imagens/adolecente f.jpg'
            }else if (idade >= 18 && idade < 60){ //adulto
                image.src ='estilos/imagens/adulta.jpg'
            }else if (idade >= 60){ //idoso
                image.src ='estilos/imagens/idosa.jpg'
            }
        }
        res.innerHTML = `<p>Você é <strong>${genero}</strong>, e tem <strong>${idade} anos</strong>, acertei?</p>`
    }
}

