// APIS Without using database , we are storing locally in array , the data will be erased when we restart the server

const express = require("express");
const app = express();
const PORT = 3002;
const subroute = require("./routes/subroute");

const api = require("./routes/route");

// Middleware
app.use(express.json());
app.use("/", subroute); // subroute is for routing learning purpose
app.use("/apis", api); //  api without db

// server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
