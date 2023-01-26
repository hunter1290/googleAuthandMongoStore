const express = require('express');
const app = express();
const User = require("./db/User")
require("./db/config");
const cors = require('cors')
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get('/',(req,res)=>{
    res.status(200).send("This is here")
});

app.post("/login",async(req,res)=>{
    if(req.body.email){
        let user = await User.findOne(req.body).select("-email");
        if (user) {
              
                res.status(201).send(user);

            }
            else{
                User.create(req.body,(err,data)=>{
                    if(err)
                    {
                         res.status(500).send(err);
                    }
                    else{
                        res.status(201).send("User Creatd");
                    }
                })
            }
    }
    }
)

app.listen(PORT, (req, res) => {
    console.log("server is running");
})