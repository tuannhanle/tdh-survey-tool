'use strict'
const surveyHandler = require('../handlers/surveyHandler');

module.exports={
    postNewSurveyData: async (req,res) =>{
        try {
             let data = req.body
            console.log(data);
            let post = await surveyHandler.postNewSurveyData(data);
            console.log(post);
            
            res.status(200);
            res.json({
                success:true
            })

        } catch (error) {
            res.status(error.status ? error.status : 404).json({
                success: false,
                msg: error
              })
        }
    },
    getSurveyData: async (req,res)=>{
        try {
            let post = await surveyHandler.getSurveyData();

        } catch (error) {
            
        }
    }
}