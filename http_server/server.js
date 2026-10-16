import express from "express";
const app = express();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./data.json");

app.get("/employees", (req, res) => {
    res.status(200).json({
        status: "success",
        data: data.employees,
    });
});

app.post("/employees", (req, res) => {
    
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
