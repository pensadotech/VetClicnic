// Require all models
var db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Doctor.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // find record base on user name
    db.Doctor.findOne({ name: { $eq: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWhere: function (req, res) {
    db.Doctor
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Doctor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    // create the Doctor
    db.Doctor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function (req, res) {
    // body has the user
    let doctor = req.body;
    // Create or Update
    db.Doctor.findOne({ name: { $eq: doctor.name } })
      .then((r) => {
        if (r === null) {
          // create
          db.Doctor.create(doctor)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        } else {
          // Update
          db.Doctor.updateOne({ name: { $eq: doctor.name } }, { $set: doctor })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    // body has the user
    let doctor = req.body;
    // Update
    db.Doctor
      .findOneAndUpdate({ _id: req.params.id }, doctor)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Doctor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
