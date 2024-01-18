const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controller/homeController");

// router.Method('/route', handler)
router.get("/", getHomepage);
router.get("/abc", getABC);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
module.exports = router;
