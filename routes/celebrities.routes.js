const router = require("express").Router();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.post("/", async (req, res) => {
  try {
    const celebrity = await Celebrity.create(req.body);

    res.status(201).json(celebrity);
  } catch (error) {
    res.status(400).json({ error: `There is an error ${error.message}` });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.json(celebrities);
  } catch (error) {
    //it's 500 for default so I can use next
    next(error);
  }
});

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      req.params = {
        id: req.params.id,
        model: `celebrity`,
      };

      res.celebrity = await Celebrity.findById(req.params.id);

      if (!res.celebrity) {
        const err = new Error();

        err.kind = `ObjectId`;
        throw err;
      }
    } catch (error) {
      next(error);
    }
  })
  .get(async (req, res, next) => {
    try {
      return res.status(200).json(res.celebrity);
    } catch (error) {
      next(error);
    }
  })

  .delete(async (req, res, next) => {
    try {
      await Celebrity.findByIdAndRemove(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const updatedCelebrity = await Celebrity.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      return res.status(200).json(updatedCelebrity);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
