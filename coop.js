const express = require("express");
const path = require("path");

const app = express()

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/mission", (req, res) => {
    res.render("mission");
});

app.get("/independence", (req, res) => {
    res.render("independence");
});

app.listen(3000)
console.log(`Web server started and running at http://localhost:3000`);

const prompt = "Stop to shutdown the server: ";
process.stdout.write(prompt);
process.stdin.setEncoding("utf-8");
process.stdin.on("readable", () => {
    const dataInput = process.stdin.read();
    const command = dataInput?.trim().toLowerCase();
    if (dataInput !== null) {
        if (command === "stop") {
            console.log("Shutting down the server");
            process.exit(0);
        }
    }
});