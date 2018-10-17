const router = require("express").Router();
const dashboardMessagesController = require("../../controllers/dashboardMessagesController");


router.route("/")
  .get(dashboardMessagesController.findAll)
  .post(dashboardMessagesController.create);


router
  .route("/:id")
  .get(dashboardMessagesController.findById)
  .put(dashboardMessagesController.update)
  .delete(dashboardMessagesController.remove);

module.exports = router;
