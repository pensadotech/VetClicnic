// Require all models
var db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Prescription.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findOne: function (req, res) {
    // find record base on user name
    db.Prescription.findOne({prescriptioNumber: { $eq: req.params.id }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findWhere: function (req, res) {
    db.Prescription
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.Prescription
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    // create
    db.Prescription.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  createUpdate: function (req, res) {
    let prescriptionData = req.body  
    // Create or Update
    db.Prescription.findOne({ prescriptioNumber: { $eq: prescriptionData.prescriptioNumber} })
      .then((r) => {
        if (r === null) {
          // create
          db.Prescription.create(prescriptionData)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err))
        } else {
          // Update
          db.Prescription.updateOne({
            prescriptioNumber: { $eq: prescriptionData.prescriptioNumber }
            }, {
              $set: prescriptionData
            })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err))
        }
      })
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    let prescriptionData = req.body
    // Update
    db.Prescription
      .findOneAndUpdate({ _id: req.params.id }, prescriptionData)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    db.Prescription
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}