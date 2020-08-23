const express = require('express')
const router = express.Router()
const service = require('../service/service')

router.get('/:resource', service.getResource)
router.get('/:resource/:id', service.getOneResource)
router.patch('/:resource/:id', service.patch)
router.post('/:resource/', service.post)
module.exports = router;