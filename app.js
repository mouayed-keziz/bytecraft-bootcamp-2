import express, { json } from "express";
import userRouter from "./routers/userRouter.js";
import { connect } from "mongoose";
import { config } from "dotenv"
import productRouter from "./routers/productRouter.js";

const app = express()
config()

app.use(json())
app.use("/users", userRouter)
app.use("/products", productRouter)

const PORT = 3000;

app.get("/", (req, res) => {
    res.send({ msg: "hello world" })
})



app.listen(PORT, async () => {
    connect(process.env.DB_URI).then(() => {
        console.log("connected to mongodb database")
    }).catch((err) => {
        console.log(err)
    })
    console.log(`server : http://localhost:${PORT}`)
})