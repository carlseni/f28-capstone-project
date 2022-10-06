const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getCars, 
    addCar, 
    deleteCar,
    updateLikes
} = require('./controller')

app.get('/getCars', getCars)
app.post('/addCar', addCar)
app.delete('/deleteCar/:id', deleteCar)
app.put('/updateLikes/:id', updateLikes)

app.listen(4567, () => console.log('family!- Dom'))