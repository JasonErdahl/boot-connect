const router = require("express").Router();
const dashboardJobsRoutes = require("./dashboardJobs");
const dashboardMessagesRoutes = require("./dashboardMessages");
const loginRoutes = require("./login");
const membersRoutes = require("./members");

// Book routes
router.use("/dashboardJobs", dashboardJobsRoutes);
router.use("/dashboardMessages", dashboardMessagesRoutes);
router.use("/login", loginRoutes);
router.use("/members", membersRoutes);


module.exports = router;
