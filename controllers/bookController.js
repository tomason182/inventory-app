const Book = require("../models/book");

// Display home page
exports.index = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Home page");
  } catch (err) {
    return next(err);
  }
};

// Display list of books.
exports.book_list = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: book list");
  } catch (err) {
    return next(err);
  }
};
// Display specific books detail.
exports.book_detail = async function (req, res, next) {
  try {
    res.send(`NOT IMPLEMENTED: book detail: ${req.params.id}`);
  } catch (err) {
    return next(err);
  }
};

// Display create book on GET.
exports.book_create_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: book create GET");
  } catch (err) {
    return next(err);
  }
};

// Handle create book on POST.
exports.book_create_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: book create POST");
  } catch (err) {
    return next(err);
  }
};
// Display delete book on GET.
exports.book_delete_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: book delete GET");
  } catch (err) {
    return next(err);
  }
};

// Handle delete book on POST.
exports.book_delete_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: book delete POST");
  } catch (err) {
    return next(err);
  }
};

// Display update book on GET.
exports.book_update_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: book update GET");
  } catch (err) {
    return next(err);
  }
};

// Handle update book on POST.
exports.book_update_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: book update POST");
  } catch (err) {
    return next(err);
  }
};
