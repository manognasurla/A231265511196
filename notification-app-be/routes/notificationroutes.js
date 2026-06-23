const express = require("express");

const router = express.Router();

const {
    addNotification,
    fetchAllNotifications,
    fetchNotification,
    updateReadStatus,
    removeNotification
} = require("../controllers/notificationController");

router.post("/notifications", addNotification);

router.get("/notifications", fetchAllNotifications);

router.get("/notifications/:id", fetchNotification);

router.patch("/notifications/:id/read", updateReadStatus);

router.delete("/notifications/:id", removeNotification);

module.exports = router;