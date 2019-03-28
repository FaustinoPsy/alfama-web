// Animação cursos
window.onload = function () {

    // Efeito de escrita
    const target = document.querySelector('.slogan')
    const writer = new Typewriter(target, {
        loop: true,
        typeSpeed: 60,
        deleteSpeed: 60,
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
        .remove('Tecnicas de vendas'.length)
        .type('AutoCAD')
        .clear()
        .start()


    // Modals
    const buttonsModal = document.querySelectorAll('.button-modal')
    const buttonsCloseModal = document.querySelectorAll('.close-modal')
    const containersModal = document.querySelectorAll('.container-modal')
    const closeContainerModal = document.querySelectorAll('#close-modal-container')
    buttonsModal.forEach(function (button) {
        const target = document.querySelector(button.getAttribute('target'))
        button.onclick = function (event) {
            event.preventDefault()
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            target.style.display = 'flex'
            // document.body.style.overflow = 'hidden'
        }
    })
    buttonsCloseModal.forEach(function (button) {
        button.onclick = fadeOut
        closeContainerModal.forEach(function (container) {
            container.onclick = fadeOut
        })

        function fadeOut() {
            containersModal.forEach(function (container) {
                container.classList.add('fadeOut')
                setTimeout(function () {
                    container.style.display = "none"
                    container.classList.remove('fadeOut')
                    // document.body.style.overflow = 'initial'
                }, 1000)
            })
        }
    })

    // Menu Mais
    const buttonMenuMais = document.querySelectorAll('.btn-menu-mais')
    const menuMais = document.querySelector('#menu-mais')
    const homePage = document.querySelector('#home-page')
    const buttonCloseMenuMais = document.querySelector('#close-menu-mais')
    buttonMenuMais.forEach(function (button) {
        button.onclick = function () {
            menuMais.style.display = 'flex'
        }
    })

    // homePage.onclick = closeMenuMais 
    buttonCloseMenuMais.onclick = closeMenuMais

    function closeMenuMais() {
        menuMais.classList.remove('slideInRight')
        menuMais.classList.add('slideOutRight')

        setTimeout(function () {
            menuMais.style.display = 'none'
            menuMais.classList.remove('slideOutRight')
            menuMais.classList.add('slideInRight')
        }, 1000)
    }

    // WOW
    new WOW().init();


    // Imagens Cursos
    const containerImagesCursos = document.querySelectorAll('.img-curso')
    containerImagesCursos.forEach(function (container) {
        const img = container.getAttribute('src')
        container.style.backgroundImage = `url(${img})`
    })


    // Renderizar cursos
    filterCursos()

    const filterCursosInput = document.getElementById('filter-cursos-input')
    const selectDuration = document.querySelector("#filter-duration-curso")
    const selectStart = document.querySelector('#filter-start-curso')

    filterCursosInput.onkeyup = filterCurso
    selectDuration.onchange = filterCurso
    selectStart.onchange = filterCurso


    function filterCurso() {
        let inputValue = filterCursosInput.value
        let selectValue = selectDuration.value
        let startValue = selectStart.value

        if (selectValue == "Todos") {
            selectValue = ''
        }

        filterCursos(inputValue, selectValue, startValue)
    }




    // MoveTo
    $("#btn-cursos").click(scrollToCursos)
    $("#btn-cursos-sm").click(scrollToCursos)

    function scrollToCursos() {
        $('html, body').animate({
            scrollTop: $("#cursos").offset().top
        }, 1000);
    }


    window.bioEp.init({})

    setTimeout(function () {
        document.getElementById('bio_ep').style.opacity = 1
    }, 4000)

    window.onscroll = detectNumberEffect

    function detectNumberEffect(){
        if($(document).scrollTop() >= $("#quem-somos").offset().top){
            effectNumber('.count', 0, 50, 30)
            console.log('ww')
        }
    }
    
    // document.querySelector("#logo-top").onclick = function(){
    //     BigPicture({
    //         el: document.querySelector("#logo-top"),
    //         imgSrc: "./assets/imgs/cursos/adm.jpg"
    //     })
    // }
}


