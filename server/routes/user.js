const expres = require("express");
const router = expres.Router();

const {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.get("/users", getUsers);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
