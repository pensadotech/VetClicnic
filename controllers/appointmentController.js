// Authentication controller
const db = require('../models');
const moment = require('moment')

module.exports = {

  findAll: function (req, res) {

    // query to find all
    let query = {}
    let selectedDate = new Date()
    let startDate = new Date()
    let endDate = new Date()

    // DAY: if a selected date was sent, adjust query to target specific date
    if (req.query.selectedDate) {
      selectedDate = new Date(req.query.selectedDate)
      startDate = moment(selectedDate).startOf('day').toDate()
      endDate = moment(selectedDate).endOf('day').toDate()
      query = { date : {"$gte": startDate, "$lt": endDate}} 
    }
    
    // MONTH: if a selected date was sent, adjust query to target specific month
    if (req.query.selectedMonth) {
      selectedDate = new Date(req.query.selectedMonth)
      startDate = moment(selectedDate).startOf('month').toDate()
      endDate = moment(selectedDate).endOf('month').toDate()
      query = { date : {"$gte": startDate, "$lt": endDate}} 
    }

    db.Appointment
      .find(query)
      .sort({ date: 1 })
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
