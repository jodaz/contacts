const bcrypt = require('bcryptjs');
const Model = require('../models/User');
const Mail = require('../config/mail');

const get = (req, res) => {
  let query = req.query;

  Model.find(query)
    .then(models => res.status(200).json(models))
    .catch(err => res.status(400).json(err.message));
};

const store = (req, res) => {
  const { password, ...data } = req.body;
  
  let user = new Model(data);

  bcrypt.genSalt(10).then(salt => {
    bcrypt.hash(password, salt).then(hash => {
      user.password = hash;
      user.save()
        .then(model => res.status(200).json(model))
        .catch(err => res.status(400).json(err.message));
    }).catch(err => res.status(400).json(err.message));
  }).catch(err => res.status(400).json(err.message));
};

const update = (req, res) => {
  const { id, ...data } = req.body;

  Model.findByIdAndUpdate(id, data, {new: true})
    .then(model => res.status(200).json(model))
    .catch(err => res.status(400).json(err.message));
};

// const destroy = (req, res) => {  };

module.exports = { get, store, update };