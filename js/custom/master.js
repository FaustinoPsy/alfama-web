// Animação cursos
window.onload = function () {

    // Efeito de escrita
    const target = document.querySelector('.slogan')
    const writer = new Typewriter(target, {
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 120,
        typeColor: '#333',
        cursorColor: '#333'
    })

    writer
        .type('Técnico em Segurança no trabalho')
        .remove(21)
        .type('Edificações')
        .remove(11)
        .type('Administração')
        .remove(13)
        .type('Petróleo e Gás')
        .remove(14)
        .type('Meio Ambiente')
        .remove(24)
        .type('Curso de Topografia')
        .remove(10)
        .type('Tecnicas de vendas')
        .clear()
        .start()

    
    // Animações
    

    // Backgorunds
    const backgrounds = document.querySelectorAll('bg')
    backgrounds.forEach(element => {
        element.style.background = `ur('${element.getAttribute('src')}')`
    })
}

function animate(elements, animation) {
    if(Array.isArray(elements)){
        elements.forEach(element => {
            const el = document.querySelector(element)
            addClassAnimate(el)
        })    
    }else{
        const el = document.querySelector(elements)
        addClassAnimate(el)
    }

    function addClassAnimate(element){
        element.classList.add('animated')
        element.classList.add(animation)
    }
}



