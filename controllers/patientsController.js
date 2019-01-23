// Require all models
var db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Patient.find({})
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // find record base on name
    db.Patient.findOne({ patientname: { $eq: req.params.id }} )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByOwner: function (req, res) {
    // find record base on name
    db.Patient.findOne({ ownername: { $eq: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByChart: function (req, res) {
    // find record base on name
    db.Patient.findOne({ chartNumber: { $eq: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWhere: function (req, res) {
    db.Patient
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Patient
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {    
    db.Patient
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function (req, res) {
    // body item
    let patient = req.body
    // Create or Update
    db.Patient.findOne({ patientname: { $eq: patient.patientname } })
      .then((r) => {
        if (r === null) {
          // create
          db.Patient.create(patient)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        } else {
          // Update
          db.Patient.updateOne({ patientname: { $eq: patient.patientname } }, { $set: patient })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Patient
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Patient
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
