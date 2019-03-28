let reloadSlect = true

function filterCursos(param = '', duration = '', start = '', callback) {
    
    fetch(`http://localhost:3001/cursos?q=${param}&d=${duration}&s=${start}`)
        .then(function(resp){return resp.json()})
        .then(function(data){renderCursos(data)})
        


    function renderCursos(data) {
        const containerCursos = document.querySelector('#container-cursos')
        let divsCursos = ''
        if (data.cursos.length > 0) {
            data.cursos.forEach(function(curso){
                let cursoType = ''
                if (curso.type == 1) {
                    cursoType = 'Curso Técnico em '
                } else if (curso.type == 2) {
                    cursoType = 'Curso '
                }
                divsCursos = divsCursos + "\n"
                divsCursos = divsCursos + `
        <div id="container-curso" class="col-lg-3 col-md-4 col-sm-6 p-1 cursor-pointer animated slideInLeft" onclick="location.href = '${curso.link}'">
        <div id="curso" class="d-flex-column">
            <div class="w-100 img-curso" src="./assets/imgs/cursos/${curso.imgName}.jpg"></div>
            <div id="info-curso" class="container p-3">
                <div id="tipo-curso" class="blue"><small>
                        <bold>${cursoType}
                    </small></small></div>
                <h3 class="orange">${curso.name}</h3>
                <div id="desc-curso"><small>${curso.description}</small></div>
                <div id="duracao-curso"><small>
                        <bold>Duração: </bold>${curso.duration}
                    </small></div>
                <div id="inicio-curso"><small>
                        <bold>Início: </bold>${curso.start}
                    </small></div>
                <div id="local-curso"><small>
                        <bold>Local: </bold>${curso.location}
                    </small></div>
            </div>
            <div id="btn-matricular" class="d-flex-column justify-content-end">
                <button class="w-100">Matricular-se</button>
            </div>
        </div>
    </div>
        `
            })

            containerCursos.innerHTML = divsCursos

            const containerImagesCursos = document.querySelectorAll('.img-curso')
            containerImagesCursos.forEach(function(container) {
                const img = container.getAttribute('src')
                container.style.backgroundImage = `url(${img})`
            })

            if (reloadSlect) {
                const selectDuration = document.querySelector("#filter-duration-curso")
                const selectStart = document.querySelector('#filter-start-curso')

                data.durations.horas.forEach(function(duration){
                    let op = document.createElement('option')
                    op.innerHTML = `${duration.time} ${duration.posFix}`
                    op.value = `${duration.time} ${duration.posFix}`
                    selectDuration.appendChild(op)
                })
                data.durations.meses.forEach(function(duration) {
                    let op = document.createElement('option')
                    op.innerHTML = `${duration.time} ${duration.posFix}`
                    op.value = `${duration.time} ${duration.posFix}`
                    selectDuration.appendChild(op)
                })
                data.starts.forEach(function(start){
                    let op = document.createElement('option')
                    op.innerHTML = start
                    op.value = start
                    selectStart.appendChild(op)
                })

                reloadSlect = false
            }

        } else {
            containerCursos.innerHTML = 'Nenhum curso encontrado'
        }

    }
}




