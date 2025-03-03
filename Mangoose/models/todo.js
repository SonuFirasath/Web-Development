import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
    title:String,
    desc:String,
    isDone:Boolean,
    days:Number
});

export const Todo = mongoose.model('Todo',todoschema);