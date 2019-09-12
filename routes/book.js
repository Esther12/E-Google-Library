const router = require("express").Router();
const booksController = require("../controllers/bookController");

// Matches with "/api/books"
router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);
module.exports = router;
