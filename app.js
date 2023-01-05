import path from 'path'
import url from 'url'
import hbs from 'hbs'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

// Middleware de express. Servidor contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Miguel Vera',
        titulo: 'Curso Node'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Miguel Vera',
        titulo: 'Curso Node'
    })
})

// app.get('*', function (req, res) {
//     res.sendFile(__dirname + '/public/404.html')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})