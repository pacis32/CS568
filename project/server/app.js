require('./models/userDetails');
require('./models/goalModel')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const cors = require('cors');
app.use(cors());

const jwt = require('jsonwebtoken')
const JWT_SECRET = '123ad';

mongoose.connect('mongodb://127.0.0.1:27017/goals'
).then(() => {
  console.log('connected successfully')
}).catch((err) => {
  console.log('something wrong', err);
})


const User = mongoose.model('UserInfo');

app.post('/register', async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User already Exists" })
    }
    await User.create({
      fname,
      lname,
      email,
      password
    });
    res.send({ status: "okay" })
  } catch (e) {
    res.send(e);
  }

});

app.post('/login-user', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
  if (!user) {
    res.send({ error: 'User does not exits ' })
  }
if(user.password === password){
  const token = jwt.sign({email, id:user._id}, JWT_SECRET);

  if (res.status(201)) {
    const newuser = user
    newuser.password = "pass";
    return res.json({...newuser, token} )
  }
  else {
    return res.json({ error: "error" });
  }
}
  

})


const Goal = mongoose.model('Goal');


//adding goal

app.post('/addGoal', async (req, res) => {
  const newGoal = req.body;
  console.log(newGoal)
  try {
   const response= await new Goal(newGoal).save()

    res.json(response._id);
  } catch (e) {
      res.json(e.message)
  }
});
// Adding Step
app.patch('/addStep/:id', async (req, res) => {
  const step = req.body;
  const goalId = req.params.id;
  try {
    const response = await Goal.findByIdAndUpdate(goalId, {
      $push: { steps: step }
    }, { new: true }); // Use the "new" option to return the updated document
    res.json(response);
  } catch (e) {
    res.json(e.message);
  }
});

//Fetch all goals

app.get('/allgoals', async(req, res)=>{
  try{
    const response = await Goal.find({});
    res.json(response)
  }catch(e){
res.json(e.message)
  }
});
// DELETE Goal
app.delete('/delete/(:id)', async( req,res)=>{
    try{
     const response= await Goal.findByIdAndRemove(req.params.id);
      res.send(response)
    }catch(e){
      res.json(e.message)
    }
})
//updateGoal

app.patch('/updategoal/:id', async (req, res) => {
  const goal = req.body;
  const goalId = req.params.id;

 
  try {
    const response = await Goal.findByIdAndUpdate(goalId, {$set:{title:goal.title, description:goal.description, deadline:goal.deadline} }); // Use the "new" option to return the updated document
    res.json(response);
  } catch (e) {
    res.json(e.message);
  }
});

app.patch('/updatestep/:goalId/:stepId', async (req, res) => {
  const newStatus = req.body;
  const goalId = req.params.goalId;
  const stepId = req.params.stepId;
try{
  const goal = await Goal.findById(goalId);
    const stepIndex = goal.steps.findIndex(step => step._id.equals(stepId));
    if (stepIndex === -1) {
      throw new Error('Step not found');
    }
    goal.steps[stepIndex] = {
      ...goal.steps[stepIndex].toObject(),
      ...newStatus,
    };
    await goal.save();
    console.log(newStatus)
    res.json('updated successfuly')
    return goal.steps[stepIndex];
    
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update step');
  }
});

app.listen(4000, () => {
  console.log('app is running on port 4000');
});






