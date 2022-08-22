const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  occupation: {
    type: Schema.Types.String,
    enum: ["actor", "singer", "comedian", "influencer", "unknown"],
    required: true,
  },
  catchPhrase: {
    type: Schema.Types.String,
    required: true,
  },
});

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
