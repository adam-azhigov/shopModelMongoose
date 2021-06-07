const { Router } = require('express')
const controllers  = require('../controllers/carts')
const router = Router()

router.post('/carts',controllers.postProductInCart)
router.delete('/cart/:id/product', controllers.deleteCart)
router.post('/upload/:id',  controllers.postImage)

module.exports = router