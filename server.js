const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const path = require('path')
const PORT = 3000
var db
//express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//mogoDb
MongoClient.connect('mongodb://tulio:123456789@ds119486.mlab.com:19486/phonebook', (err, database) => {
    if (err) return console.log('errrrrrrrrrrrrrroooooooo')
    db = database
    app.listen(PORT, () => {
      console.log('listening on 3000')
      res.redirect('/')
    })
})
//templates
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const data = { phoneBook: null, submitted: false }
    response.render('index', data)
})

app.post('/createPhoneBook', (request, response) => {
    db.collection('phoneBook').save(request.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
})


// app.get('/phoneBook', (request, response) => {

//     // conexao com o banco de dados
//     phoneBookList = {
//         first_name: request.query.first_name,
//         last_name: request.query.last_name,
//         email: request.query.email,
//         phone: request.query.phone,
//         address: request.query.address,
//         city: request.query.city
//     }
//     MongoClient.connect('mongodb://brayansi:12345678@ds119486.mlab.com:19486/phonebook', function (err, db) {
//         db.collection('Pessoas', function (err, collection) {
//             collection.insert(this.phoneBookList);
//             db.collection('Pessoas').count(function (err, count) {
//                 if (err) throw err;
//                 console.log('Total Linhas na coleção : ' + count);
//             });
//         });
//     });
//     console.log(phoneBookList.first_name);
//     console.log(phoneBookList.last_name);
//     const data = {
//         phoneBook: phoneBookList,
//         submitted: true
//     }

//     response.render('index', data)
// })

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})