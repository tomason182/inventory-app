const Author = require("../models/author");

// Display list of all authors.
exports.author_list = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author list");
  } catch (err) {
    return next(err);
  }
};

// Display detail page for specific author.
exports.author_detail = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author details");
  } catch (err) {
    return next(err);
  }
};

// Display create author on GET.
exports.author_create_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author create GET");
  } catch (err) {
    return next(err);
  }
};

// Handle create author on POST.
exports.author_create_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author list");
  } catch (err) {
    return next(err);
  }
};

// Display delete author on GET.
exports.author_delete_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author delete GET");
  } catch (err) {
    return next(err);
  }
};

// Handle delete author on POST.
exports.author_delete_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author delete POST");
  } catch (err) {
    return next(err);
  }
};

// Display update author on GET.
exports.author_update_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author update GET");
  } catch (err) {
    return next(err);
  }
};

// Handle update author on POST.
exports.author_update_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: author update POST");
  } catch (err) {
    return next(err);
  }
};
