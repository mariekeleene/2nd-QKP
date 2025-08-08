
const express = require("express");
const app = express();
const port = 404;

app.use("/WEB1",express.static("WEB1"));
app.use("/WEB2",express.static("WEB2"));
app.use("/WEB3",express.static("WEB3"));
app.use("/WEB4",express.static("WEB4"));
app.use("/WEB5",express.static("WEB5"));
app.use("/WEB6",express.static("WEB6"));
app.use("/WEB7",express.static("WEB7"));

app.listen(port);