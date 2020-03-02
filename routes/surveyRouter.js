var express = require('express');
var router = express.Router();
const surveyControllers = require('../controllers/surveyController');

/* GET home page. */
router.post('/',surveyControllers.postNewSurveyData);
router.get('/',surveyControllers.getSurveyData);
module.exports = router;
