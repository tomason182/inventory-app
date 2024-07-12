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
const publisher = require("./models/publisher");
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
    populateGenreCollection(),
  ]);
  console.log(
    "Debug: Authors, publisher and genre collection populated. Starting populating books collection"
  );
  await populateBookData(),
    console.log("Population finish. Closing db connection");
  mongoose.connection.close();
}

// Populate publisher data into MongoDB Publishers collection.
async function populatePublisherCollection(publishersData) {
  try {
    await Promise.all(
      publishersData.map(async (publisherData) => {
        let publisher = await Publisher.findOne({
          name: publisherData.name,
        });

        if (publisher === null) {
          publisher = new Publisher({
            name: publisherData.name,
            address: publisherData.address,
            phoneNumber: publisherData.phoneNumber,
            email: publisherData.email,
          });

          await publisher.save();
        }
      })
    );
  } catch (err) {
    console.log("Error populating publishers: ", err);
  }
}

async function populateAuthorCollection(authorsData) {
  try {
    await Promise.all(
      authorsData.map(async (authorData) => {
        let author = await Author.findOne({
          first_name: authorData.first_name,
          last_name: authorData.last_name,
        });

        if (author === null) {
          author = new Author({
            first_name: authorData.first_name,
            last_name: authorData.last_name,
            bio: authorData.bio,
            nationality: authorData.nationality,
            date_of_birth: authorData.date_of_birth,
            date_of_death: authorData.date_of_death,
          });

          await author.save();
        }
      })
    );
  } catch (err) {
    console.log("Error populating authors: ", err);
  }
}

async function populateGenreCollection(genresData) {
  try {
    await Promise.all(
      genresData.map(async (genreName) => {
        let genre = await Genre.findOne({ name: genreName });
        if (!genre) {
          genre = new Genre({
            name: genreName,
          });
          await genre.save();
        }
      })
    );
  } catch (err) {
    console.log("Error population genres: ", err);
  }
}

async function populateBookData(booksData) {
  // Logic to populate book data.
  // As book collection needs authors, publisher and genre info to be populated
  try {
    await Promise.all(
      booksData.map(async (book) => {
        const authorId = await getAuthorId(book.author);
        const publisherId = await getPublisherId(book.publisher);
        const genreIds = await getGenreId(book.genre);

        const newBook = new Book({
          title: book.title,
          author: authorId,
          summary: book.summary,
          isbn: book.isbn,
          genre: genreIds,
          publisher: publisherId,
          qty: book.qty,
          price: book.price,
          publishedDate: new Date(book.publishedDate),
        });

        await newBook.save();
      })
    );
  } catch (err) {
    console.log("Error populatin books: ", err);
  }
}

async function getAuthorId(fullname) {
  const [firstName, lastName] = fullname.split(",").map((i) => i.trim());
  let authorObj = await Author.findOne({
    first_name: firstName,
    last_name: lastName,
  });

  if (authorObj !== null) {
    return authorObj._id;
  } else {
    authorObj = new Author({
      first_name: firstName,
      last_name: lastName,
      nationality: "Unknown",
    });

    await authorObj.save();

    return authorObj._id;
  }
}

async function getPublisherId(publisherName) {
  // Try to find publisherName in Publisher collection
  let publisherObject = await Publisher.findOne({ name: publisherName });
  // if find name return it's Id.
  if (publisherObject !== null) {
    return publisherObject._id;
  } else {
    // If name not in the collection. Create a new document.
    const newPublisher = new Publisher({
      name: publisherName,
      address: "Unknown",
      phoneNumber: "Unkown",
      email: "Unkown",
    });

    // save new document.
    await newPublisher.save();
    // Find again the recent created document and return Id.
    // publisherObject = await Publisher.findOne({ name: publisherName }); ** Not necessary to make the search?
    return publisherObject._id;
  }
}

async function getGenreId(genresName) {
  // Genres is a list. Need to loop on every item.
  // Initialize an empty list for store genres names.
  const genreList = await Promise.all(
    genresName.map(async (name) => {
      let genreObj = await Genre.find({ name });

      if (genreObj) {
        return genreObj._id;
      } else {
        genreObj = new Genre({ name });
        await genreObj.save();
        return genreObj._id;
      }
    })
  );
  return genreList;
}
