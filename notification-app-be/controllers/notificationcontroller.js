let notificationStore = [];

const addNotification = (req, res) => {

    const newNotification = {
        id: Date.now(),
        studentId: req.body.studentId,
        title: req.body.title,
        message: req.body.message,
        notificationType: req.body.notificationType,
        isRead: false
    };

    notificationStore.push(newNotification);

    res.status(201).json({
        message: "Notification created",
        data: newNotification
    });
};

const fetchAllNotifications = (req, res) => {

    res.status(200).json(notificationStore);
};

const fetchNotification = (req, res) => {

    const notificationId = Number(req.params.id);

    const result = notificationStore.find(
        item => item.id === notificationId
    );

    if (!result) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }

    res.status(200).json(result);
};

const updateReadStatus = (req, res) => {

    const notificationId = Number(req.params.id);

    const result = notificationStore.find(
        item => item.id === notificationId
    );

    if (!result) {
        return res.status(404).json({
            message: "Notification not found"
        });
    }

    result.isRead = true;

    res.status(200).json({
        message: "Notification marked as read"
    });
};

const removeNotification = (req, res) => {

    const notificationId = Number(req.params.id);

    notificationStore = notificationStore.filter(
        item => item.id !== notificationId
    );

    res.status(200).json({
        message: "Notification deleted successfully"
    });
};

module.exports = {
    addNotification,
    fetchAllNotifications,
    fetchNotification,
    updateReadStatus,
    removeNotification
};