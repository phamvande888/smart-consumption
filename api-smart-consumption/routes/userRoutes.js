const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Tạo mới người dùng
router.post("/users", userController.createUser);

// Lấy tất cả người dùng
router.get("/users", userController.getUsers);

// Lấy thông tin người dùng theo ID
router.get("/users/:id", userController.getUserById);

// Cập nhật người dùng theo ID
router.put("/users/:id", userController.updateUser);

// Xóa người dùng theo ID
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
