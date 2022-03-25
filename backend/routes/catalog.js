const round_controller = require('../controllers/roundController');
const hand_controller = require('../controllers/handController')
const express = require('express');
let router = express.Router();

router.get('/round', round_controller.list);
router.get('/round/play', round_controller.play);
router.get('/hand', hand_controller.list);

module.exports = router;
