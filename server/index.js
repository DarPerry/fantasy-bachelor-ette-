const express = require("express");
const {
    addDocument,
    addDocuments,
    deleteMany,
    getDocuments,
} = require("./database/operations.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(cors());

var jsonParser = bodyParser.json();

app.get("/contestants", async (req, res) => {
    res.send(await getDocuments("contestants"));
});

app.get("/weeklyEvents", async (req, res) => {
    res.send(await getDocuments("weeklyEvents"));
});

app.post("/weeklyEvents", jsonParser, async (req, res) => {
    const response = await addDocument(req.body);

    console.log(req.body);

    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
