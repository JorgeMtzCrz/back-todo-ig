const router = require('express').Router();
const { signup, login, loggedUser, logout } = require('../controllers/authControllers')
const passport = require('../config/passport')
const { verifyToken } = require('../config/jwt')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/logged', verifyToken, loggedUser)
router.get('/logout', logout)

module.exports = router;