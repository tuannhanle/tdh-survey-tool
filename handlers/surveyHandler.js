const surveyModel = require('../models/surveyModel');

module.exports={
    postNewSurveyData: async(data)=>{
        console.log(data);
        
        let result = await surveyModel.create({
            ...data
        })
        console.log("test");
        
        return result;
        
    },
    getSurveyData: async()=>{
        let data = await surveyModel.find()
        return data;
    }
}