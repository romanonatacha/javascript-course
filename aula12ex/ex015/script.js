function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    function setImage(child, young, adult, old) {
        if (idade >= 0 && idade < 13) {
            // child
            img.setAttribute('src', child)
        } else if (idade < 21) {
            // young
            img.setAttribute('src', young)
        } else if (idade < 66) {
            // adult
            img.setAttribute('src', adult)
        } else {
            // old
            img.setAttribute('src', old)
        }
    }

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            setImage('boy.png', 'man-young.png', 'man.png', 'man-old.png')

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            setImage('girl.png', 'woman-young.png', 'woman.png', 'woman-old.png')
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}