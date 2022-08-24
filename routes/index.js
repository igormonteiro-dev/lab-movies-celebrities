const router = require("express").Router();

//require all routes that were created
const celebritiesRoutes = require("../routes/celebrities.routes");
const moviesRoutes = require("../routes/movies.routes");

// This is a health check. It allows us to see that the API is running.

router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-movies-celebrities" })
);

// then.. use all routes
router.use("/celebrities", celebritiesRoutes);
router.use("/movies", moviesRoutes);

module.exports = router;
