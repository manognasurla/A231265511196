const express = require("express");

const app = express();

app.use(express.json());

const notificationRoutes = require("./routes/notificationRoutes");

app.use("/api", notificationRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Notification Service Running On Port ${PORT}`);
});