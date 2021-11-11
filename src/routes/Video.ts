import {Schema, model} from 'mongoose'
import { title } from 'process'

const videoSchema = new Schema ({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    url:{
        type: String,
        required: true,
        unique: true,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('Video', videoSchema)