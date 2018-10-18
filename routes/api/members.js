const router = require("express").Router();
const membersController = require("../../controllers/membersController");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const passport = require('passport')

router.route("/")
  .get(membersController.findAll)
  .post(upload.any(), membersController.create);

router
  .route("/:id")
  .get(membersController.findById)
  .put(membersController.update)
  .delete(membersController.remove);

  
module.exports = router;
