const db = require("../models");

// Defining methods for the DashBoardJobsController
module.exports = {
  findAll: function(req, res) {
    console.log('finding all jobs in controller')
    db.DashBoardJobs
      .findAll()
      .then(DashBoardJobs => res.json(DashBoardJobs))
      .catch(err => {
        res.status(422).json(err)
        });
  },
  findById: function(req, res) {
    db.DashBoardJobs
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.DashBoardJobs
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log('there was an error creating the job')

        res.status(422).json(err)
        });
  },
  update: function(req, res) {
    db.DashBoardJobs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.DashBoardJobs
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
