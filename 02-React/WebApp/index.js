const mysql = require("mysql2");

const connectionParams = {
    host: "sql11.freemysqlhosting.net",
    user: "sql11417887",
    database: "sql11417887",
    password: "unN1rR9V3u"
}

const connection = mysql.createConnection(connectionParams);

connection.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
        getAllUsers();
    }
});

async function getAllUsers() {
    console.log("all users");
    const data = await connection.execute(
        "SELECT * FROM Users"
    )

    connection.end;
    return data[0];
}

async function addUser() {
    console.log("add user")

    const data = await connection.execute(
        "INSERT INTO Users(Name, Mail, About, Image, Password) VALUES('Max', 'max@gmail.com', 'hello', 'hi', 0000)"
    );

    connection.end;
    return data[0];
}