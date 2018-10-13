const router = require("express").Router();
const dashboardMessagesController = require("../../controllers/dashboardMessagesController");

// Matches with "/api/books"
router.route("/")
  .get(dashboardMessagesController.findAll)
  .post(dashboardMessagesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(dashboardMessagesController.findById)
  .put(dashboardMessagesController.update)
  .delete(dashboardMessagesController.remove);

module.exports = router;
