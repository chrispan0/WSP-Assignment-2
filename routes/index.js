var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});
router.get("/github", function (req, res, next) {
  res.render("github", { title: "GitHub" });
});

module.exports = router;
