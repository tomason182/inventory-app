const Publisher = require("../models/publisher");

// Display list of all publishers
exports.publisher_list = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Publisher list.");
  } catch (err) {
    return next(err);
  }
};

// Display specific publisher details
exports.publisher_detail = async function (req, res, next) {
  try {
    res.send(`NOT IMPLEMENTED: Publisher detail: ${req.params.id}`);
  } catch (err) {
    return next(err);
  }
};

// Display create publisher on GET.
exports.publisher_create_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Publisher create GET");
  } catch (err) {
    return next(err);
  }
};

// Handle create a publisher on POST.
exports.publisher_create_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Publisher create POST");
  } catch (err) {
    return next(err);
  }
};

// Display delete a publisher on GET.
exports.publisher_delete_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Publisher delete GET");
  } catch (err) {
    return next(err);
  }
};

// Handle delete a publisher on POST.
exports.publisher_delete_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Publisher delete POST");
  } catch (err) {
    return next(err);
  }
};

// Display update a publisher on GET.
exports.publisher_update_get = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Publisher update GET");
  } catch (err) {
    return next(err);
  }
};

// Handle update a publisher on POST
exports.publisher_update_post = async function (req, res, next) {
  try {
    res.send("NOT IMPLEMENTED: Publisher updated POST");
  } catch (err) {
    return next(err);
  }
};
