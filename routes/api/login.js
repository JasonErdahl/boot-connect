const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require('passport');


router.route("/")
  
  .get(loginController.findAll)
  .post(passport.authenticate("local"), (req,res) => {
    res.send(200)
  });

router
  .route("/:id")
  .get(loginController.findById)
  .put(loginController.update)
  .delete(loginController.remove);
  

module.exports = router;
