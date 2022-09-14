const router = require("express").Router()

router.post('/login', userController.login)

router.get('/logout', userController.logout)

module.exports = router