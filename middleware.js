
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

//route handler
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post("/health", (req, res) =>{
    const kidney = req.body.kidny;
    const kidnylen = kidney.length;
    
    res.send(`you have ${kidnylen} lenkidneys`)
})
//gkobal  catches
app.use(function (err, req, res, next) {
    res.json({
        msg: "sorry somthing went wrong cccc"
    })
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})