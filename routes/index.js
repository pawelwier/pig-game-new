var express = require('express');
var router = express.Router();

var landing = require('../controllers/landing');


router.get('/', landing.get_landing);
router.post('/', landing.post_landing);

router.get('/game', landing.get_game_main);
router.post('/game', landing.post_game_scores);

module.exports = router;