
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user", userController.updateUser);
router.delete("/delete-user", userController.deleteUser);
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.put("/change-password", userController.changePassword);
router.put("/update-profile", userController.updateProfile);
router.put("/make-admin/:id", userController.makeAdmin);
router.put("/remove-admin/:id", userController.removeAdmin);
router.get("/search", userController.searchUsers);
router.get("/filter", userController.filterUsers);
router.patch("/block-user/:id", userController.blockUser);
router.patch("/unblock-user/:id", userController.unblockUser);
router.post("/verify-email", userController.verifyEmail);
router.post("/resend-verification", userController.resendVerification);
router.post("/upload-profile-picture", userController.uploadProfilePicture);
router.delete("/delete-account", userController.deleteAccount);

module.exports = router;
