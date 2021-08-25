const { createUser, getUserByUserId, getUsers } =require('./user.controller');
const { create, updateUsers } = require('./user.service');
const router = require("express").Router();

router.post('/',createUser);
router.get('/',getUsers);
router.get('/:id', getUserByUserId);
router.patch('/', updateUsers)
module.exports = router;