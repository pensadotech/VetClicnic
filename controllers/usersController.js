// Require all models
var db = require("../models")
const passwordHash = require('password-hash')

module.exports = {
  findAll: function(req,res) {
    db.User.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findOne: function(req,res) {
     // body has the user
    let user = req.body
    // find record base on user name
    db.User.findOne({ pubId: { $eq: user.username } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findWhere: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
     // body has the user
    let user = req.body
    // encrypt password
    let hashedPassword = passwordHash.generate(user.password)
    user.password = hashedPassword

    db.Users
      .create(user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function(req,res) {
     // body has the user
    let user = req.body
    // encrypt password
    let hashedPassword = passwordHash.generate(user.password)
    user.password = hashedPassword

    // Create or Update
    db.User.findOne({ pubId: { $eq: user.username } })
      .then((r) => {
        if (r === null) {
         // create 
         db.User.create(user)
           .then(() => res.sendStatus(200))
           .catch(err => res.status(422).json(err))
       } else {
         // Update 
         db.User.updateOne( { username : { $eq: user.username} } , { $set: user } )
           .then(() => res.sendStatus(200))
           .catch(err => res.status(422).json(err))
       }
    })
    .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    // body has the user
    let user = req.body
    // encrypt password
    let hashedPassword = passwordHash.generate(user.password)
    user.password = hashedPassword
    
    db.User
      .findOneAndUpdate({ _id: req.params.id }, user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}