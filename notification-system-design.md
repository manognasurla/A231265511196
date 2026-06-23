# Notification System Design

# Stage 1 - API Design

## 1. Create Notification

POST /notifications

Request Body:

{
  "studentId": 1042,
  "notificationType": "Placement",
  "title": "Amazon Hiring Drive",
  "message": "Amazon is hiring for SDE roles."
}

Response:

{
  "notificationId": 1,
  "status": "created"
}

--------------------------------------------------

## 2. Get All Notifications

GET /notifications?studentId=1042

Response:

[
  {
    "notificationId": 1,
    "title": "Amazon Hiring Drive",
    "message": "Amazon is hiring for SDE roles.",
    "isRead": false
  }
]

--------------------------------------------------

## 3. Get Single Notification

GET /notifications/1

Response:

{
  "notificationId": 1,
  "title": "Amazon Hiring Drive",
  "message": "Amazon is hiring for SDE roles.",
  "isRead": false
}

--------------------------------------------------

## 4. Mark Notification as Read

PATCH /notifications/1/read

Response:

{
  "status": "success",
  "message": "Notification marked as read"
}

--------------------------------------------------

## 5. Delete Notification

DELETE /notifications/1

Response:

{
  "status": "success",
  "message": "Notification deleted"
}

--------------------------------------------------

## Real-Time Notification Delivery

Use WebSockets for real-time notification updates.

Reason:
- Instant delivery of notifications
- No repeated polling requests
- Lower server load
- Better user experience