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


    // Modals
    const buttonsModal = document.querySelectorAll('.button-modal')
    const buttonsCloseModal = document.querySelectorAll('.close-modal')
    const containersModal = document.querySelectorAll('.container-modal')
    const closeContainerModal = document.querySelectorAll('#close-modal-container')
    buttonsModal.forEach(button => {
        const target = document.querySelector(button.getAttribute('target'))
        button.onclick = function (event) {
            
            event.preventDefault()
            target.style.display = 'flex'
            document.body.style.overflow = 'hidden'
        }
    })
    buttonsCloseModal.forEach(button => {
        button.onclick = fadeOut
        closeContainerModal.forEach(container => {
            container.onclick = fadeOut
        })

        function fadeOut() {
            containersModal.forEach(container => {
                container.classList.add('fadeOut')
                setTimeout(() => {
                    container.style.display = "none"
                    container.classList.remove('fadeOut')
                    document.body.style.overflow = 'initial'
                }, 1000)
            })
        }
    })




}

function animate(elements, animation) {
    if (Array.isArray(elements)) {
        elements.forEach(element => {
            const el = document.querySelector(element)
            addClassAnimate(el)
        })
    } else {
        const el = document.querySelector(elements)
        addClassAnimate(el)
    }

    function addClassAnimate(element) {
        element.classList.add('animated')
        element.classList.add(animation)
    }
}



