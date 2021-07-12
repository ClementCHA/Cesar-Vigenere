const express = require ('express');

const router = express.Router();

const mainController = require ('./controllers/mainController');


router.get('/', mainController.homePage);

router.get('/cesar', mainController.cesarPage)
router.post('/cesar', mainController.submit)

module.exports = router; 