const express = require("express");
const app = express();


// by this route http://localhost:6222/multiply?val1=x&val2=y
// we can multiply x and y
app.get("/multiply", (req, res)=>{
    const{ val1 , val2 } = req.query
    res.send(`the answer is ${val1*val2}`)
})



app.listen(6222, ()=>{
    console.log('listening to port 6222')
})
