import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Server</h1>")
})

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
})