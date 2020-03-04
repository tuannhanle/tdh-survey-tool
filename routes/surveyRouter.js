var express = require('express');
var router = express.Router();
const surveyControllers = require('../controllers/surveyController');

/* GET home page. */
router.post('/',surveyControllers.postNewSurveyData);
router.get('/',surveyControllers.getSurveyData);
router.get('/filterGenderPercent',surveyControllers.filterGenderPercent);
router.get('/filterTypePercent',surveyControllers.filterTypePercent);
router.get('/filterAgePercent',surveyControllers.filterAgePercent);
router.get('/filterLanguagePercent',surveyControllers.filterLanguagePercent);

module.exports = router;
