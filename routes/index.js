const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// router.all('*', (req, res) => {
//   console.log(req.originalUrl)
// })
// API Routes
router.use("/api", (req, res, next) => {
  console.log('about to hit api')
  apiRoutes(req, res, next)
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
