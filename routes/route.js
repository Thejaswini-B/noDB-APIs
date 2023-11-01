const express = require("express");
const router = express.Router();

const User = [
  { id: 1, name: "Teja" },
  { id: 2, name: "Sujan" },
];

router.post("/userpost", (req, res) => {
  console.log("Received POST request :", req.body);
  const last = User.slice(-1)[0].id;
  // console.log("Last id: ", last);
  const newUser = {
    id: last + 1,

    name: req.body.name,
  };
  if (User.length < 5) {
    User.push(newUser);
    res.status(200).json(newUser);
    console.log("Final User Array from POST:", User); // return User final array
  } else {
    res.json("Users count has exceeded the limit of 10");
  }
});

// GET Method
//  it will give all users present
router.get("/users", (req, res) => {
  res.json(User);
});

// DELETE Method

router.delete("/userdel/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = User.findIndex((user) => user.id === id);
  // console.log(index)
  if (index === -1) {
    res.status(400).json("User not found to delete");
  }
  const deletedUser = User.splice(index, 1);
  // console.log(deletedUser);
  res.json(deletedUser);
  console.log("User array after deleting : ", User);
});

// PUT Method
router.put("/userupdate/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = User.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(400).json({ message: "User not found to update" });
  }

  const updatedUser = req.body;
  const fin = { id: id, ...updatedUser };
  User.splice(index, 1, fin); //  updates the user in the User array

  res.json(fin);

  console.log("Updated user array:", User);
});

router.put("/userdeladd/:id", (req, res) => {
  const id = parseInt(req, params.id);
  const index = User.findIndex((user) => user.id === id);

  if (1 < id < User.length) {
    const updatedUser = req.body;
    const fin = { id: id, ...updatedUser };
    User.splice(index, 1, fin); //  updates the user in the User array

    res.json(fin);
  }
  if (index === -1) {
    res.json("User not found");
  }
});

module.exports = router;
