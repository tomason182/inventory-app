const { argv } = require("node:process");

const Book = require("./models/book");
const Author = require("./models/author");
const Genre = require("./models/genre");
const Publisher = require("./models/publisher");

// Data to populate db.
const authorsData = require("./data/authors-data");
const publishersData = require("./data/publishers-data");
const booksData = require("./data/books-data");
const genresData = require("./data/genres-data");

const mongoose = require("mongoose");
const genre = require("./models/genre");
mongoose.set("strictQuery", false);

const mongoUrl = argv[2];

// Set up connection with mongoBD
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoUrl);
  console.log("Debug: Database connected");
  await Promise.all([
    populatePublisherCollection(),
    populateAuthorCollection(),
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
async function populatePublisherCollection() {
  publishersData.forEach(async (publisherData) => {
    const publisher = new Publisher({
      name: publisherData.name,
      address: publisherData.address,
      phoneNumber: publisherData.phoneNumber,
      email: publisherData.email,
    });

    // Check if publisher already exist in the database.
    const publisherExist = await Publisher.findOne({ name: publisher.name });
    if (publisherExist !== null) {
      await publisher.save();
    }
  });
}

async function populateAuthorCollection() {
  authorsData.forEach(async (authorData) => {
    const author = new Author({
      first_name: authorData.first_name,
      last_name: authorData.last_name,
      bio: authorData.bio,
      nationality: authorData.nationality,
      date_of_birth: authorData.date_of_birth,
      date_of_death: authorData.date_of_death,
    });

    const authorExist = await Author.findOne({
      first_name: authorData.first_name,
      last_name: authorData.last_name,
    });
    if (authorExist !== null) {
      await author.save();
    }
  });
}

async function populateGenreData() {
  genresData.forEach(async (genreData) => {
    const genre = new Genre({
      name: genreData,
    });

    const genreExist = await Genre.findOne({ name: genreData });
    if (genreExist !== null) {
      await genre.save();
    }
  });
}

async function populateBookData() {
  // Logic to populate book data.
  // As book collection needs authors, publisher and genre info to be populated
  // needed to be outside Promise.all
  booksData.forEach(async (bookData) => {
    const authorId = await getAuthorId(bookData.author);
    const publisherId = await getPublisherId(bookData.publisher);
    const genreId = await getGenreId(bookData.genre);

    const book = new Book({
      title: bookData.title,
      author: authorId,
      summary: bookData.summary,
      isbn: bookData.isbn,
      genre: [...genreId],
      publisher: publisherId,
      qty: bookData.qtym,
      price: [...bookData.price],
      publishedDate: new Date(bookData.publishedDate),
    });
  });
}

async function getAuthorId(fullname) {
  const [lastName, firstName] = fullname.split(",").map((i) => i.trim());
  const authorObject = await Author.findOne({
    first_name: firstName,
    last_name: lastName,
  });

  if (authorObject !== null) {
    return authorObject._id;
  } else {
    const author = new Author({
      first_name: firstName,
      last_name: lastName,
      nationality: "Unknown",
    });
    const authorObject = await Author.findOne({
      first_name: firstName,
      last_name: lastName,
    });
    return authorObject._id;
  }
}

async function getPublisherId(publisherName) {
  const publisherObject = await Publisher.findOne({ name: publisherName });
  if (publisherObject !== null) {
    return publisherObject._id;
  } else {
    const publisher = new Publisher({
      company_name: publisherName,
      address: "Unknown",
      phoneNumber: "Unkown",
      email: "Unkown",
    });

    publisherObject = await Publisher.findOne({ name: publisherName });
    return publisherObject._id;
  }
}

async function getGenreId(genreName) {
  // Genres is a list. Need to loop throw each of them.
  const genreObject = await Genre.findOne({ name: genreName });
  if (genreObject !== null) {
    return genreObject._id;
  } else {
    const genre = new Genre({ name: genreName });
  }
}
