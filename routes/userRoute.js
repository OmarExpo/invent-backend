const express = require("express");
const router = express.Router();

const {
  registerUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");


router.post("/register", registerUser);
router.get("/getUser", getUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
