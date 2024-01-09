const express = require('express')
const router = express.Router()
const {getHomepage, getABC} = require('../controller/homeController')

// router.Method('/route', handler)
router.get('/', getHomepage)
router.get('/abc', getABC)

module.exports = router