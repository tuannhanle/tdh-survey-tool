var express = require('express');
var router = express.Router();
const surveyControllers = require('../controllers/surveyController');

/* GET home page. */
router.post('/',surveyControllers.postNewSurveyData);
router.get('/',surveyControllers.getSurveyData);
router.get('/filterGenderPercent',surveyControllers.filterGenderPercent)
module.exports = router;
