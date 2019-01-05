// Require all models
var db = require("../models")

module.exports = {
  findAll: function (req, res) {
    db.Meds.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findOne: function (req, res) {
    // body has the user
    let med = req.body
    // find record base on user name
    db.Meds.findOne({ pubId: { $eq: med.name } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findWhere: function (req, res) {
    db.Meds
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Meds
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    // create the user
    db.Meds
      .create(user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    // Create or Update
    db.Meds.findOne({ pubId: { $eq: user.username } })
      .then((r) => {
        if (r === null) {
          // create 
          db.Meds.create(user)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err))
        } else {
          // Update 
          db.Meds.updateOne({ username: { $eq: med.name } }, { $set: med })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err))
        }
      })
      .catch(err => res.status(422).json(err))
  },
    db.Meds
      .findOneAndUpdate({ _id: req.params.id }, user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Meds
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}