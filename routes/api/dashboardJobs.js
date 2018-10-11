const router = require("express").Router();
const dashboardJobsController = require("../../controllers/dashboardJobsController");

// Matches with "/api/books"
router.route("/")
  .get(dashboardJobsController.findAll)
  .post(dashboardJobsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(dashboardJobsController.findById)
  .put(dashboardJobsController.update)
  .delete(dashboardJobsController.remove);

module.exports = router;
