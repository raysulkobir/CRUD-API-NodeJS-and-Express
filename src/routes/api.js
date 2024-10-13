const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

const brandController = require('../controller/BrandController')
const authController = require('../controller/AuthController')

//* Define routes for Brand operations
router.get('/brands', authMiddleware, brandController.getAllBrands)
router.post('/brands', authMiddleware, brandController.createBrand)
router.get('/brands/:id', authMiddleware, brandController.getBrandById)
router.put('/brands/:id', authMiddleware, brandController.updateBrand)
router.delete('/brands/:id', authMiddleware, brandController.deleteBrand)

//* Define routes for Auth operations
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

//TODO Fixed export to use 'module.exports'
module.exports = router
