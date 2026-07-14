
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://shaun:ares2008@cluster0.dsyjzb7.mongodb.net/nss-volunteer?appName=Cluster0").then(

    () => {
        console.log("mongodb connected")
    }

).catch(
    () => {
        console.log(error)
    }
)

const Team = mongoose.model("Teams", new mongoose.Schema(

    {
        volunteerId: String,
        fullName: String,
        email: String,
        phone: String,
        dateOfBirth: Date,
        gender: String,
        bloodGroup: String,
        department: String,
        yearOfStudy: Number,
        campName: String,
        hoursCompleted: Number,
        address: String,
        unitNumber: String
    }

))

app.get("/test", (req, res) => {

    res.send("hello world")
})

app.post("/add-vol", async (req, res) => {

    await Team.create(req.body)
    res.json({ "status": "success" })
})

app.post("/view-vol", async (req, res) => {

    const teams = await Team.find()
    res.json(teams)
})

app.listen(3000, () => {

    console.log("server started")
})