// Authentication controller
const db = require('../models');

module.exports = {

  findAll: function (req, res) {
    db.Appointment.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // find record base on first or last name
    db.Appointment.findOne({ title: { $eq: req.params.title } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    let newAppoint = req.body;
    console.log(newAppoint)
    // create the appointment
    db.Appointment.create(newAppoint)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    // body has the user
    let appointment = req.body;
    // Update
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, appointment)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
