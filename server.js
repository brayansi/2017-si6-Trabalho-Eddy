const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

//express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//templates
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

// app.get('/', (request, response) => {
//     const data = { student:null, submitted:false }
//     response.render('index', data)
// })

app.get('/', (request, response) => {
    const data = { phoneBook:null, submitted:false }
    response.render('index', data)
})

app.get('/phoneBook', (request, response) => {
    phoneBookList ={first_name : request.query.first_name,
                    last_name : request.query.last_name,
                    email : request.query.email,
                    phone : request.query.phone,
                    address : request.query.address,
                    city : request.query.city
                    }

    
    console.log(phoneBookList.first_name);
    console.log(phoneBookList.last_name);
    const data = {
        phoneBook: phoneBookList,
        submitted: true
    }

    response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})