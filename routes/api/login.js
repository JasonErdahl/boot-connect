const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require('passport');


router.route("/")
  
  .get(loginController.findAll)
  .post((req, res, next) => {
    console.log('about to authenticate');
    next();
  },
    passport.authenticate("local"), loginController.create);

router
  .route("/:id")
  .get(loginController.findById)
  .put(loginController.update)
  .delete(loginController.remove);
  // ff

module.exports = router;
