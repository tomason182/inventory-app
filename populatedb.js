const { argv } = require("node:process");

const Book = require("./models/book");
const Author = require("./models/author");
const Genre = require("./models/genre");
const Publisher = require("./models/publisher");

// Data to populate db.
const authorsData = require("./data/authors-data");
const publishersData = require("./data/publishers-data");
const booksData = require("./data/books-data");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoUrl = argv[2];

// Set up connection with mongoBD
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoUrl);
  console.log("Debug: Database connected");
  await Promise.all([
    populatePublisherData(),
    populateAuthorData(),
    populateGenreData(),
  ]);
  console.log(
    "Debug: Authors, publisher and genre collection populated. Starting populating books collection"
  );
  await populateBookData(),
    console.log("Population finish. Closing db connection");
  mongoose.connection.close();
}

// Populate publisher data into MongoDB Publishers collection.
async function populatePublisherData() {
  publishersData.forEach(async (publisherData) => {
    const publisher = new Publisher({
      name: publisherData.name,
      address: publisherData.address,
      phoneNumber: publisherData.phoneNumber,
      email: publisherData.email,
    });

    // Check if publisher already exist in the database.
    const publisherExist = await Publisher.findOne({ name: publisher.name });
    if (!publisherExist) {
      await publisher.save();
    }
  });
}

async function populateAuthorData() {
  // Logic to populate the authors collection.
}

async function populateGenreData() {
  // Logic to populate the Genre collection.
}

async function populateBookData() {
  // Logic to populate book data.
  // As book collection needs authors, publisher and genre info to be populated
  // needed to be outside Promise.all
}
