const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Route to list files and render the view
app.get("/", function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) {
            console.error("Error reading directory:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.render("index", { files: files });
    });
});

// Route to create a task
app.post("/create", function (req, res) {
    const fileName = req.body.title.split(' ').join('_') + '.txt';
    const filePath = path.join(__dirname, 'files', fileName);
    fs.writeFile(filePath, req.body.details, function (err) {
        if (err) {
            console.error("Error writing file:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.redirect("/");
    });
});

// Route to read a specific task file and send its details
app.get("/task/:fileName", function (req, res) {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'files', fileName);

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.render("task", { title: fileName, details: data });
    });
});

// Start the server
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
