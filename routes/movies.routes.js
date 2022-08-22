const router = require("express").Router(),
  mongoose = require(`mongoose`),
  Movie = require(`../models/Movie.model`);

router.post("/", async (req, res, next) => {
  try {
    const movie = req.body;

    const createdMovie = await Movie.create(movie);

    res.status(201).json(createdMovie);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();

    res.json(movies);
  } catch (error) {
    next(error);
  }
});

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.id).populate("cast");

      res.status(201).json(movie);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const removeMovie = await Movie.findByIdAndRemove(req.params.id);
      console.log(removeMovie);
      res.status(204).json({ message: "NO CONTENT" });
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      return res.status(200).json(updatedMovie);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
