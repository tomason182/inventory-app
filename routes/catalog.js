const express = require("express");
const router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const publisher_controller = require("../controllers/publisherController");
const genre_controller = require("../controllers/genreController");

/// BOOKS ROUTES ///

// GET home page.
router.get("/", book_controller.index);

// GET request for create a book.
router.get("/book/create", book_controller.book_create_get);

// POST request for create a book.
router.post("/book/create", book_controller.book_create_post);

// GET request for delete a book.
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request for delete a book.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request for update a book.
router.get("/book/:id/update", book_controller.book_update_get);

// POST request for update a book.
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for display special book.
router.get("/book/:id");

// GET request for display all books.
router.get("/books", book_controller.book_list);

/// AUTHORS ROUTES ///

// GET request for create an author.
router.get("/author/create", author_controller.author_create_get);

// POST request for create an author.
router.post("author/create", author_controller.author_create_post);

// GET request for delete an author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request for delete an author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request for update an author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request for update an author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for display special author
router.get("/author/:id", author_controller.author_detail);

// GET request for display all authors.
router.get("/authors", author_controller.author_list);

/// PUBLISHERS ROUTES ///

// GET request for create a publisher
router.get("/publisher/create", publisher_controller.publisher_create_get);

// POST request for create a publisher
router.post("/publisher/create", publisher_controller.publisher_create_post);

// GET request for delete a publisher
router.get("/publisher/:id/delete", publisher_controller.publisher_delete_get);

// POST request for delete a publisher
router.post(
  "/publisher/:id/delete",
  publisher_controller.publisher_delete_post
);

// GET request for update a publisher
router.get("/publisher/:id/update", publisher_controller.publisher_update_get);

// POST request for update a publisher
router.post(
  "/publisher/:id/update",
  publisher_controller.publisher_update_post
);

// GET request for display a specific publisher
router.get("/publisher/:id", publisher_controller.publisher_detail);

// GET request for display all publishers.
router.get("/publishers", publisher_controller.publisher_list);

/// GENRES ROUTES ///

// GET request for create a genre
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for create a genre
router.post("/genre/create", genre_controller.genre_create_post);

// GET request for delete a genre
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request for delete a genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request for update a genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request for update a genre.
router.post("genre/:id/update", genre_controller.genre_update_post);

// GET request for display a genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for display genre list
router.get("/genres", genre_controller.genre_list);
