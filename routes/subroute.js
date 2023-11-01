const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/textroute", (req, res) => {
  res.send(
    "This is routes handling , it is from 'routes/subroutes' path , we will use 'use()' in the main file so it is also a middleaware  "
  );
});

router.get("/htmlroute(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "SampleFiles", "route.html"));
});

module.exports = router;
