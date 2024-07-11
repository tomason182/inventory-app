const { argv } = require("node:process");

const Book = require("./models/book");
const Author = require("./models/author");
const Genre = require("./models/genre");
const Publisher = require("./models/publisher");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoUrl = argv[2];

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect();
  console.log("Debug: Database connected");
}
