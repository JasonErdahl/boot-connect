const router = require("express").Router();
const dashboardJobsController = require("../../controllers/dashboardJobsController");

router.route("/")
  .get(dashboardJobsController.findAll)
  .post(dashboardJobsController.create);

router
  .route("/:id")
  .get(dashboardJobsController.findById)
  .put(dashboardJobsController.update)
  .delete(dashboardJobsController.remove);

module.exports = router;
