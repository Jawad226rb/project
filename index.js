const {}= require("./models/students")
const express = require("express")
const app = express()
const AdminCheck = require ("./middlewares/AdminCheck")
// Sync Data Base 
// async function ConnectDB() {

//     try {
//         await students.sync ({force:true})
//         console.log("100000000000000000000000000%");
        
//     } catch (error) {
//         console.log("Again............................ ");
        
        
//     }
    
// }
// ConnectDB()




app.use(express.json());

// function calc(req,res,next){
//     res.send("Get OUT")
// }
// function calc2(req,res,next){
//     next()
// }

// middle ware use to re request to routes 


app.use("/api/v1/students",require("./routes/students")) 





 // Global 404 Page to Handle unlock URl Requests
app.use ("*", (req,res)=>{
    
    res.status(404).send(`This Requested ${req.baseUrl} route Doest Not Exist`)
}
)

// Global Error Handle Express

app.use ((err,req,res,next)=>{
    res.send(`Error Handle from index.js ======>>>>> ${err.message}`)
})



// Port Listen Server
app.listen(3000, function(){
    console.log("Connected at 3000 Port ");
    
})
