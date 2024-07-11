const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true, maxLength: 200 },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String },
  isbn: { type: String, require: true, maxLength: 13 },
  genre: { type: Schema.Types.ObjectId, ref: "Genre" },
  publisher: { type: Schema.Types.ObjectId, ref: "Publisher", required: true },
  qty: { type: Number, maxLength: 1000, required: true },
  // adding price using an array allows to add multiple price in different currencies
  price: [
    {
      currency: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
  published_date: { type: Date },
});

BookSchema.virtual("url").get(function () {
  return `catalog/book/${this._id}`;
});

module.exports = mongoose.model("Book", BookSchema);
