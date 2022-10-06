
const baseURL = 'http://localhost:4567'

const showCars = document.querySelector('#carDisplay')
const addButton = document.querySelector('#addCar')

// Axios request to get cars array
// Loop over that array
// Create car cards for each item in the array

const getAllCars = () => {
    axios.get(`${baseURL}/getCars`)
        .then((res) => {
            displayCars(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const displayCars = (arr) => {
    for(let i = 0; i < arr.length; i++){
        createCarCard(arr[i])
    }
}

const createCarCard = (car) => {
    const carCard = document.createElement('section')
    carCard.classList.add('car-card')

    carCard.innerHTML = `
        <img src=${car.picture} alt='car image'/>
        <p>${car.make}</p>
        <p>${car.model}</p>
        <section>
            <button onclick="updateDrink(${car.id}, 'dislike')">Dislike</button>
            Popularity: ${car.likes}
            <button onclick="updatear(${car.id}, 'like')">Like</button>
        </section>
        <button onclick="deleteCar(${car.id})">Destroy</button>
        <br><br/>
        <br><br/>
    `
    showCars.appendChild(carCard)
}

const deleteCar = (id) => {
    axios.delete(`${baseURL}/deleteCar/${id}`)
        .then((res) => {
            showCars.innerHTML = ''
            displayCars(res.data)
        })
}

const updateCar = (id, type) => {
    axios.put(`${baseURL}/updateLikes/${id}`, {type})
        .then((res) => {
            showCars.innerHTML = ''
            displayCars(res.data)
        })
}


const addCar = () => {

    let makeInput = document.querySelector('#makeInput')
    let modelInput = document.querySelector('#modelInput')
    let imageInput = document.querySelector('#imageInput')

    let newCar = {
        make: MakeInput.value,
        model: modelInput.value,
        picture: imageInput.value
    }

    axios.post(`${baseURL}/addManufacturer`, newCar)
    .then((res) => {
        showCars.innerHTML = ''

        MakeInput.value = ''
        ModelInput.value = ''
        imageInput.value = ''

        displayCars(res.data)
    })
}


addButton.addEventListener('click', addCar)
getAllCars()