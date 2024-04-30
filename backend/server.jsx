const express =require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Success");
}).catch((err) => {
    console.log(err.message);
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Running on "+PORT);
})