const round_controller = require('../controllers/roundController');
const express = require('express');
let router = express.Router();

router.get('/round', round_controller.list);

module.exports = router;
