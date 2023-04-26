const mongoose = require('mongoose');

mongoose.connect('mongobd://localhost:27017/goals',{
    useNewUrlParser:true,
    useUnifieldTopology:true
}).then(()=>{
    console.log('connected successfully')
}).catch((err)=>{
    console.log('something wrong',err);
})
  
