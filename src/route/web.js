const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controller/homeController");

// router.Method('/route', handler)
router.get("/", getHomepage);
router.get("/abc", getABC);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/delete-user/", postHandleRemoveUser);

module.exports = router;
