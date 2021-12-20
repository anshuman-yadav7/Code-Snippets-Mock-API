const express = require("express");
const cors = require("cors");
const path = require("path");
const snippets = require("./snippets");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
    return res.send({
        success: 1,
        data: JSON.stringify(snippets.snippets.slice(0, 10))
    });
});

app.get("/api/filter/:type", (req, res) => {
    let type = req.params.type;
    type = type.toLowerCase();
    const filteredData = snippets.snippets.filter(item => item.snippet.toLowerCase().indexOf(type) !== -1 || item.type.toLowerCase().indexOf(type) !== -1);
    if (type === "all") {
        filteredData = snippets.snippets;
    }
    return res.send({
        success: 1,
        data: JSON.stringify(filteredData)
    });
});

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.listen(3001, () => {
    console.log("Listening at port 3001");
});