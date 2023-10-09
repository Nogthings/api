const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/article.controller");

router.get("/test", ArticleController.test);

router.post("/create", ArticleController.create);

module.exports = router;