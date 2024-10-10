const express = require("express");
const router = express.Router();

const { getAllBrands, createBrand, getBrandById, updateBrand, deleteBrand } = require("../controller/BrandController");

//* Define routes for Brand operations
router.get('/brands', getAllBrands);
router.post('/brands', createBrand);
router.get('/brands/:id', getBrandById);
router.put('/brands/:id', updateBrand);
router.delete('/brands/:id', deleteBrand);

//TODO Fixed export to use 'module.exports'
module.exports = router;
