function gerar(){
    var tb = document.querySelector('p#tb')
    var txtn1 = document.querySelector('input#itab')
    var n1 = Number(txtn1.value)
    var m = '1'
    var mf = '10'
    var duna = document.querySelector('option#duna')
    var res = document.getElementsByTagName('select')[0]
    res.innerHTML = ''
    while(m <= mf){
        var r = n1*m
        res.innerHTML += `<option>${n1} x ${m} = ${r}</option>`
        m++
    }
}

