const express = require("express");
const router = express.Router();
const publiController = require("./controllers/publiControlers")

router.get('/DevBlog', publiController.getAll)

module.exports = router

