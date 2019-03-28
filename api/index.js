const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const _ = require('lodash')
const path = require('path')
const ejs = require('ejs')
const cursos = require('./cursos.json')
const config = require('./config.json')
const ip = require('ip').address()

const port = config.port

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join('../')))
app.set('views', path.join('../'))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')


app.get('/', function (req, resp) {
    resp.render('index')
})

app.get('/cursos', function (req, resp) {
    const filterName = req.query.q ? req.query.q.toLowerCase() : ''
    const filterDuration = req.query.d ? req.query.d.toLowerCase() : ''
    const filterStart = req.query.s ? req.query.s.toLowerCase() : ''

    cursosWithFilter = cursos.filter(function (curso) {
        const name = curso.name.toLowerCase()
        const description = curso.description.toLowerCase()
        const duration = curso.duration.toLowerCase()
        const start = curso.start.toLowerCase()

        return ((name.indexOf(filterName) >= 0 || description.indexOf(filterName) >= 0) && duration.indexOf(filterDuration) >= 0 && start.indexOf(filterStart) >= 0)
        
    })

    let durations = _.uniq(cursosWithFilter.map(function (curso) { return curso.duration }))
    let starts = _.uniq(cursos.map(function (curso) { return curso.start }))
    durations = durations.map(function (duration) {
        const durationSplit = duration.split(' ')
        return { time: Number(durationSplit[0]), posFix: durationSplit[1] }
    })
    durations.sort(function (a, b) {
        return a.time - b.time
    })

    const meses = []
    const horas = []
    const outhers = []
    durations.forEach(function (duration) {
        const posFix = duration.posFix.toLowerCase()
        if (posFix == 'meses' || posFix == 'mês' || posFix == 'mes') {
            meses.push(duration)
        } else if (posFix == 'horas' || posFix == 'hora') {
            horas.push(duration)
        } else {
            outhers.push(duration)
        }
    })

    resp.json({ cursos: cursosWithFilter, durations: { meses: meses, horas: horas, outhers: outhers }, starts, results: cursosWithFilter.length })
})

app.listen(port, function () {
    console.log(`
        ---
        Local: http://localhost:${port}
        ---
        Acesse: http://${ip}:${port}
        ---
    `)
})