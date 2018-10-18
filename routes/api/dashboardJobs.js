const router = require("express").Router();
const dashboardJobsController = require("../../controllers/dashboardJobsController");
const isAuthenticated = require('../api/isAuthenticated') 

router.route("/")
  .get(isAuthenticated, dashboardJobsController.findAll)
  .post(isAuthenticated, dashboardJobsController.create);

router
  .route("/:id")
  .get(dashboardJobsController.findById)
  .put(dashboardJobsController.update)
  .delete(dashboardJobsController.remove);

module.exports = router;
