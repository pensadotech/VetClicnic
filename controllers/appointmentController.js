// Authentication controller
const db = require('../models');

module.exports = {

  findAll: function (req, res) {
    db.Appointment.find({})
      .populate('doctor')
      .populate('patient')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // find record base on first or last name
    db.Appointment.findOne({ title: { $eq: req.params.title } })
      .populate('doctor')
      .populate('patient')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWhere: function (req, res) {
    db.Appointment
      .find(req.query)
      .populate('doctor')
      .populate('patient')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Appointment
      .findById(req.params.id)
      .populate('doctor')
      .populate('patient')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {   
    let newAppoint = req.body;
    // create the appointment
    db.Appointment.create(newAppoint)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    let appointment = req.body
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

}
