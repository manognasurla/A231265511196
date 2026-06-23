const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzdXJsYW1hbm9nbmEuMjMuY3NkQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjE5MjY4NiwiaWF0IjoxNzgyMTkxNzg2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNGI5ODBhZmMtZTA0ZS00ZTliLWI5OTQtOTAxZjkyNWVkMjQwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3VybGEgbWFub2duYSIsInN1YiI6IjZlMTM5YjE1LWEwYWItNGIzZS05YjA3LWNmOTJkOTA3ZDk5YiJ9LCJlbWFpbCI6InN1cmxhbWFub2duYS4yMy5jc2RAYW5pdHMuZWR1LmluIiwibmFtZSI6InN1cmxhIG1hbm9nbmEiLCJyb2xsTm8iOiJhMjMxMjY1NTExOTYiLCJhY2Nlc3NDb2RlIjoiTVRxeGFyIiwiY2xpZW50SUQiOiI2ZTEzOWIxNS1hMGFiLTRiM2UtOWIwNy1jZjkyZDkwN2Q5OWIiLCJjbGllbnRTZWNyZXQiOiJFR2ROR1B5YmJGWkJ5ZkJiIn0.QDqSew_fZRZFWg_pOds1yEa7UWV0Em79Y2Z-ERdze8I";

async function Log(stack, level, packageName, message) {
    try {

        console.log("Token Length:", ACCESS_TOKEN.length);

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("SUCCESS:");
        console.log(response.data);

    } catch (err) {

        console.log("STATUS:", err.response?.status);
        console.log("DATA:", err.response?.data);
        console.log("MESSAGE:", err.message);

        if (err.config) {
            console.log("HEADERS SENT:");
            console.log(err.config.headers);
        }
    }
}

module.exports = Log;