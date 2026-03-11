const express = require("express");
const { signup, signin, refreshAccessToken, logout, authUser } = require("../controllers/authController");
const { authProtecter } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/refreshToken", refreshAccessToken);
router.post("/logout", logout);
router.get("/authUser", authProtecter, authUser);

module.exports = router;