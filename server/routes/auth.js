const expres = require("express");
const router = expres.Router();

const {
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/auth");

router.route("/").get(getUsers).post(registerUser).post(loginUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
