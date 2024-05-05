const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://arshmulla007:oE065LQcvLGzA59e@cluster0.ewjxcay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const todoSchema=mongoose.Schema({
    title:String,
    description :string,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}