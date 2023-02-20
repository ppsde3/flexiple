const express = require("express");
const { auth } = require("../utils/middleware");
const { getUser, setUserAvatar, removeUserAvatar, getAllUsers } = require("../controllers/user");

const router = express.Router();

router.get("/", auth, getAllUsers);
router.get("/:username", getUser);
router.post("/avatar", auth, setUserAvatar);
router.delete("/avatar", auth, removeUserAvatar);

module.exports = router;
