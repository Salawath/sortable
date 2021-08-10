const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/add-user", userController.getUserForm);
router.post("/add-user", userController.userAdd);
router.post("/sortable", userController.sort);

module.exports = router;
