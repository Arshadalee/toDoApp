const express=require('express');
const { todo } = require('./db');
const {createTodo} = require('./tyes');


const app = express();

app.use(express.json());
app.post("/todo",async function(req, res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({message:"you sent the wrong inputs"})
    return;
    }
     await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false

    })
    res.json({
        message:"todo created"
    })
});

app.get("/todos",async function(req, res){
    const todos=await todo.find({});
    console.log

});

app.put("/completed",async function(req, res){
const updatePayload=req.body;
const parsePayload=updatedTodo.safeParse(updatePayload);
if(!parsePayload.success){
    res.status(411).json({message:"you sent the wrong inputs"})
return;
}
await todo.update({
    _id:req.body.id
},{
    completed:true,
})
res.json({
    message:"todo marked as completed"
})
});

app.listen(3001);