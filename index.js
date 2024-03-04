
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
//route handler
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post("/conv", (req, res) =>{
    console.log(req.body);
    res.send({
        mes: "2=233"
    })
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})