function carregar() {
    var tit = window.document.getElementById('titulo')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#E2CD9F'
        tit.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#B9846F'
        tit.innerHTML = 'Boa tarde!'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        tit.innerHTML = 'Boa noite!'
    }
}

