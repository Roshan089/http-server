
const express = require('express')
const app = express()
const port = 3000
const z= require("zod")

app.use(express.json());

const schema = z.array(z.number())

/*const schema = z.object({
    email: z.string(),
    password: z.string(),
    country: z.literal( "IN").or(z.literal("US")),
    kidnieys: z.array(z.number()),
})
*/
//route handler
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post("/health", (req, res) =>{
    const kidney = req.body.kidny;
    
    const respons = schema.safeParse(kidney)
    
    if (!respons.success) {
        res.status(411).json({
         mes: "invalid authontication"
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