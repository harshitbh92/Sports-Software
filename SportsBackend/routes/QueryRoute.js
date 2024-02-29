const express = require("express");
const { createQuery } = require("../controller/Query");

const router = express.Router();

router.post("/contactus", createQuery);

module.exports = router;
