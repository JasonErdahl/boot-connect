const router = require("express").Router();
const loginController = require("../../controllers/loginController");


router.route("/")
  .get(loginController.findAll)
  .post(loginController.create);

router
  .route("/:id")
  .get(loginController.findById)
  .put(loginController.update)
  .delete(loginController.remove);

module.exports = router;
