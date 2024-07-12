const Genre = require("../models/genre");

// Display list of all genres.
exports.genre_display_list = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: genre list");
  } catch (err) {
    return next(err);
  }
};

// Display detail of specific genre.
exports.genre_display_detail = async function (req, res, next) {
  try {
    res.send(`NOT IMPLEMENTED: genre detail: ${req.params.id}`);
  } catch (err) {
    return next(err);
  }
};
// Display create genre on GET.
exports.genre_create_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: create genre GET");
  } catch (err) {
    return next(err);
  }
};
// Handle create genre on POST.
exports.genre_create_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: create genre POST");
  } catch (err) {
    return next(err);
  }
};

// Display delete genre on GET.
exports.genre_delete_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: genre delete GET");
  } catch (err) {
    return next(err);
  }
};

// Handle delete genre on POST.
exports.genre_delete_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: genre delete POST");
  } catch (err) {
    return next(err);
  }
};
// Display update genre on GET.
exports.genre_update_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: genre update GET");
  } catch (err) {
    return next(err);
  }
};
// Handle update genre on POST.
exports.genre_update_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: genre update POST");
  } catch (err) {
    return next(err);
  }
};
