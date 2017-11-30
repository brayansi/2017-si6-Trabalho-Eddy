const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express()
const path = require('path')
const PORT = process.env.PORT
var db
//express setup
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(bodyParser.json())

//templates
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')


//get list phoneBook
app.get('/', (request, response) => {
    var cursor = db.collection('phoneBook').find().toArray(function (err, results) {
        const data = { phoneBooks: results, submitted: false }
        response.render('index', data)
    })
})
//mogoDb
MongoClient.connect('mongodb://tulio:123456789@ds119486.mlab.com:19486/phonebook', (err, database) => {
    if (err) return console.log('errrrrrrrrrrrrrroooooooo')
    db = database
    app.listen(PORT, () => {
        console.log('listening on 3000')
    })
})

//create phoneBook
app.post('/createPhoneBook', (request, response) => {
    db.collection('phoneBook').save(request.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        response.redirect('/');
    })
})

//update
app.put('/update', (req, res) => {
    db.collection('phoneBook')
        .findOneAndUpdate({ name: 'Santos' }, {
            $rename: {
                'Santos': '007',
            }
        })
})
//delete phoneBook
app.delete('/delete', (req, res) => {
    db.collection('phoneBook').deleteOne({ first_name: req.body.name },
        (err, result) => {
            if (err) return res.send(500, err)
            res.send({ message: 'ok' })
        })
})



module.exports = app;


