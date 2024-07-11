const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PublisherSchema = new Schema({
  company_name: { type: String, require: true, maxLength: 100},
  address: {type: String, require: true, maxLength: 50};
})

PublisherSchema.virtual("url").get(function() {
  return `catalog/publisher/${this._id}`
})

module.exports = mongoose.model("Publisher", PublisherSchema)