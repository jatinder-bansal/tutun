const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const userRoutes = require("./routes/userRoutes")

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

// app.use("/user",userRoutes);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connect Sucessfully");
}).catch((err)=>{
    console.log(err.message);
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})