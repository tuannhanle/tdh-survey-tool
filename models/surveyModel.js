const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-aggregate-paginate');
searchable = require('mongoose-regex-search');
const Schema = mongoose.Schema;
const SurveySchema = new Schema({
    gender:{
        type:String,
        required: true
    },
    language:{
        type:String,
        required: true
    },
    age:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    }
},
    { timestamps: true }
)
SurveySchema.plugin(mongoosePaginate)
const Model = mongoose.model('Survey',SurveySchema)
module.exports=Model;