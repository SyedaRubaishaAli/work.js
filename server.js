const express = require ("express")
const app = express()
const bodyParser = require ("body-parser")
const logger = require ("morgan")
const PORT = 5000

app.use(bodyParser.json())
app.use(logger("dev"))

const UserRouter = require("./Routes/User")
app.use("/User", UserRouter)

const authRouter = require("./Routes/auth")
app.use("/", authRouter)

app.listen(PORT,() => {
    console.log(`Server is running at Port ${PORT}`);
})