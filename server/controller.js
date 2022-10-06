
const cars = require('./db.json')
let carId = 4

// Get, Post, Delete, Put

module.exports = {
    getCars: (req, res) => {
        res.status(200).send(cars)
    },

    addCar: (req, res) => {

        const {make, picture, model} = req.body
        console.log(req.body)
        let newCarObject = {
            id: carId,
            make: make,
            picture: picture,
            model: model,
            likes: 0
        }

        cars.push(newcarsObject)

        carId++
        
        res.status(200).send(cars)
    },

    deleteCar: (req, res) => {
        const index = cars.findIndex(el => el.id === +req.params.id)

        cars.splice(index, 1)

        res.status(200).send(cars)
    }, 

    updateLikes: (req, res) => {
        const index = cars.findIndex(el => el.id === +req.params.id)
        const {type} = req.body

        if(type === 'like'){
            cars[index].likes++
        }else if(type === 'dislike'){
            cars[index].likes--
        }

        res.status(200).send(cars)
    }
} 