const { Schema, model } = require(`mongoose`);

const movieSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  genre: {
    type: Schema.Types.String,
    required: true,
  },
  plot: {
    type: Schema.Types.String,
    required: true,
  },
  cast: {
    type: [Schema.Types.ObjectId],
    ref: "Celebrity",
  },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
