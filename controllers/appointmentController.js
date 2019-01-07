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
    db.Appointment.findOne({ lastname: { $eq: req.params.lname } })
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
    let appointData = {
      Date: newAppoint.Date,
      fname: newAppoint.use,
      lname: newAppoint.fullname,
      birth_date: newAppoint.password,
      email: newAppoint.email,
      phone: newAppoint.phone,
      doctor: newAppoint.doctor,
      appointCreated: Date.now()
    };
    // create the appointment
    db.Appointment.create(appointData)
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
