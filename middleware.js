
const express = require('express')
const app = express()
const port = 3000
const zod = require("zod")

app.use(express.json());

const  schema=zod.array(zod.number())

//route handler
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post("/health", (req, res) =>{
    const kidney = req.body.kidny;
    
    const respons = schema.safeParse(kidney)
    
    if (!respons.success) {
        res.status(411).json({
         mes: "jhfgdyjfj"
        })
    }
    
    else {
        res.send(
            {
                respons
            }
        )
   }
})
//gkobal  catches
/*
app.use(function (err, req, res, next) {
    res.json({
        msg: "sorry somthing went wrong cccc"
    })
})
*/
app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})