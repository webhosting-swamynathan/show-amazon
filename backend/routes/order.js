const express = require('express')
const { createOrder } = require('../controllers/orderController')
const router = express.Router()

router.route('/order').post(createOrder)


// export the order page 

module.exports = router ;