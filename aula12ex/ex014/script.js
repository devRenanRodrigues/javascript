function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png.png'
        document.body.style.background = '#deae23'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.png.png'
        document.body.style.background = '#a56963'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png.png'
        document.body.style.background = '#2c3d4a'
    }
}
