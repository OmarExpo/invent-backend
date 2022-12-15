const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();
const { upload } = require("../utils/fileUpload");

router.post("/", upload.single("image"), createProduct);

router.get("/", getProducts);
router.get("/:id", getProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", upload.single("image"), updateProduct);

module.exports = router;
