// Require all models
var db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Meds.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // find record base on user name
    db.Meds.findOne().or([{alias: req.params.id}, {name: req.params.id}])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAlias: function (req, res) {
    // find record base on user name
    db.Meds.find({alias: { $eq: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
  create: function (req, res) {
    // create the user
    db.Meds.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function (req, res) {
    // body has the user
    let medsData = req.body
    // Create or Update
    db.Meds.findOne({ name: { $eq: medsData.name} })
      .then((r) => {
        if (r === null) {
          // create
          db.Meds.create(medsData)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        } else {
          // Update
          db.Meds.updateOne({
              name: { $eq: medsData.name }
            }, {
              $set: medsData
            })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    // body has the user
    let medsData = req.body

    //Update
    db.Meds
      .findOneAndUpdate({ _id: req.params.id }, medsData)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Meds
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};