const express = require("express");
const router = express.Router();

const controller = require("../controllers/moviesControllers");

//router.verboHTTP(a rota, controller)
router.get("/all", controller.getAll)

module.exports = router;
