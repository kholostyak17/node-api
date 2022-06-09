const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    destination: { type: String, required: true, maxlength: 15 },
    category: { type: String, enum: ["family", "friends", "work"] },
    start_date: { type: Date, required: true },
    end_date: { type: Date },
  },
  {
    timestamps: true, //new field to see when was the data created, and when was updated
  }
);

module.exports = mongoose.model("trip", tripSchema);
