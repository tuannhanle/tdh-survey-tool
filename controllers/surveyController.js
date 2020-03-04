'use strict'
const surveyHandler = require('../handlers/surveyHandler');
const alibarray = require('alib-array');

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
            let data = await surveyHandler.getSurveyData();
            res.status(200)
            res.json({
              success: true,
              result: data
            })
            
        } catch (error) {
            res.status(error.status ? error.status : 404).json({
                success: false,
                msg: error
              })
        }
    },
    filterGenderPercent: async(req,res)=>{
        try {
            let {type}=req.query;            
            let jsonAll =  await surveyHandler.getSurveyData();
            let countAll = alibarray().count(jsonAll,{})
            let countType= alibarray().count(jsonAll,{gender : type})
            let percent =( countAll - (countAll-countType) ) / countAll *100;
            console.log(percent);
            
            res.status(200)
            res.json({
              success: true,
              result: percent
            })
            
        } catch (error) {
            res.status(error.status ? error.status : 404).json({
                success: false,
                msg: error
              })
        }
    },
    filterTypePercent: async(req,res)=>{
        try {
            let {type}=req.query;            
            let jsonAll =  await surveyHandler.getSurveyData();
            let countAll = alibarray().count(jsonAll,{})
            let countType= alibarray().count(jsonAll,{type : type})
            let percent =( countAll - (countAll-countType) ) / countAll *100;
            console.log(percent);
            
            res.status(200)
            res.json({
              success: true,
              result: percent
            })
            
        } catch (error) {
            res.status(error.status ? error.status : 404).json({
                success: false,
                msg: error
              })
        }
    },
    filterAgePercent: async(req,res)=>{
        try {
            let {type}=req.query;            
            let jsonAll =  await surveyHandler.getSurveyData();
            let countAll = alibarray().count(jsonAll,{})
            let countType= alibarray().count(jsonAll,{age : type})
            let percent =( countAll - (countAll-countType) ) / countAll *100;
            console.log(percent);
            
            res.status(200)
            res.json({
              success: true,
              result: percent
            })
            
        } catch (error) {
            res.status(error.status ? error.status : 404).json({
                success: false,
                msg: error
              })
        }
    },
    filterLanguagePercent: async(req,res)=>{
        try {
            let {type}=req.query;            
            let jsonAll =  await surveyHandler.getSurveyData();
            let countAll = alibarray().count(jsonAll,{})
            let countType= alibarray().count(jsonAll,{language : type})
            let percent =( countAll - (countAll-countType) ) / countAll *100;
            console.log(percent);
            
            res.status(200)
            res.json({
              success: true,
              result: percent
            })
            
        } catch (error) {
            res.status(error.status ? error.status : 404).json({
                success: false,
                msg: error
              })
        }
    }
}