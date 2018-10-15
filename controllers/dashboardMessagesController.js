const db = require("../models");

// Defining methods for the DashboardMessageController
module.exports = {
  findAll: function(req, res) {
    db.DashboardMessages
      .findAll()
      .then(DashBoardMessages => res.json(DashBoardMessages))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.DashboardMessages
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.DashboardMessages
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.DashboardMessages
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.DashboardMessages
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
