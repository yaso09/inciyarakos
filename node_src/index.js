const express = require("express");
const child_process = require("child_process");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000);

console.log("Minecraft server running at: 25565");
console.log("Node server running at: 3000");

child_process.exec("java -Xmx1G -Xms1G -jar server.jar nogui");