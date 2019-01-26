// Require all models
var db = require('../models');
const passwordHash = require('password-hash');

module.exports = {
  findAll: function (req, res) {
    db.User.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // find record base on user name
    db.User.findOne({ username: { $eq: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWhere: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    // body has the user
    let newUser = req.body;
    // translate
    let userData = {
      username: newUser.username,
      fullname: newUser.fullname,
      password: newUser.password,
      phone: newUser.phone,
      email: newUser.email,
      isAdmin : newUser.isAdmin,
      userCreated: Date.now()
    };
    // encrypt password
    if (newUser.needsEcnryption) {
      let hashedPassword = passwordHash.generate(userData.password);
      userData.password = hashedPassword;
    }
    // create the user
    db.User.create(userData)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function (req, res) {
    // body has the user
    let newUser = req.body;
    // translate
    let userData = {
      username: newUser.username,
      fullname: newUser.fullname,
      password: newUser.password,
      phone: newUser.phone,
      email: newUser.email,
      isAdmin : newUser.isAdmin,
      userCreated: Date.now()
    };
    // encrypt password
    if (newUser.needsEcnryption) {
      let hashedPassword = passwordHash.generate(userData.password);
      userData.password = hashedPassword;
    }
    // Create or Update
    db.User.findOne({ username: { $eq: userData.username } })
      .then((r) => {
        if (r === null) {
          // create
          db.User.create(userData)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        } else {
          // Update
          db.User.updateOne({ username: { $eq: userData.username } }, { $set: userData })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    // body has the user
    let newUser = req.body;
    // translate
    let userData = {
      username: newUser.username,
      fullname: newUser.fullname,
      password: newUser.password,
      phone: newUser.phone,
      email: newUser.email,
      isAdmin : newUser.isAdmin,
      userCreated: Date.now()
    };
    // encrypt password
    if (newUser.needsEcnryption) {
      let hashedPassword = passwordHash.generate(userData.password);
      userData.password = hashedPassword;
    }
    // Update
    db.User
      .findOneAndUpdate({ _id: req.params.id }, userData)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
