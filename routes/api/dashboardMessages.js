const router = require("express").Router();
const dashboardMessagesController = require("../../controllers/dashboardMessagesController");
const isAuthenticated = require('../api/isAuthenticated') 


router.route("/")
  .get(isAuthenticated, dashboardMessagesController.findAll)
  .post(isAuthenticated, dashboardMessagesController.create);


router
  .route("/:id")
  .get(dashboardMessagesController.findById)
  .put(dashboardMessagesController.update)
  .delete(dashboardMessagesController.remove);

module.exports = router;
