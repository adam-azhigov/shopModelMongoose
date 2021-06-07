const {Router} = require('express')

const router = Router()

// router.use(require('./brands'))
router.use(require('./carts'))
// router.use(require('./categories'))
// router.use(require('./products'))
//router.use(require('./reviews'))
// router.use(require('./users'))

module.exports = router