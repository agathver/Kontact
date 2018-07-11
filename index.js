const mongoose = require('mongoose')
const Kontact = require('./models/model')//Import Model from Models
const inquirer = require('inquirer')

//Mapping promise to get rid of warning
mongoose.Promise = global.Promise

// Connection to database
mongoose.connect('mongodb://localhost:27017/kontact', {
    useMongoClient: true
});

//Add a contact
const addKontact = (contact) => {
    Kontact.create(contact)
      .then(contact => {
      console.info('New Customer Added')
      db.close()
    })
  }