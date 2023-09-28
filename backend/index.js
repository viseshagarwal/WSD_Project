const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const port = 3002;
const hostname = "localhost";

const db = "react_ecom";
const tbl = "user_login";
const tbl1 = "products";

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
  origin: "*",
  methods: "GET",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// MySQl connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: db,
});

// Connect with MySql
connection.connect((err) => {
  if (err) throw err;
  console.log("MySql Connected");
});

// routes
app.get("/login", (req, res) => {
  // Display all data
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  connection.query("SELECT * from " + tbl, function (err, result) {
    if (err) throw err;
    //console.log("Result: " + JSON.stringify(result));
    res.end(JSON.stringify(result));
  });
});

// For Products
app.get("/products", (req, res) => {
  // Display all data
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  connection.query("SELECT * from " + tbl1, function (err, result) {
    if (err) throw err;
    //console.log("Result: " + JSON.stringify(result));
    res.end(JSON.stringify(result));
  });
});

app.post("/signup", (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  // console.log(req.body)
  var resp = req.body;
  console.log(resp["id"]);
  connection.query(
    "INSERT into " +
      tbl +
      " (address,  email, name, password, phone_no, username ) VALUES ('" +
      resp["address"] +
      "','" +
      resp["email"] +
      "','" +
      resp["name"] +
      "','" +
      resp["password"] +
      "'," +
      resp["phone_no"] +
      ",'" +
      resp["username"] +
      "')",
    function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
      res.end(JSON.stringify(result));
    }
  );
});

// app.post('/update', (req,res) => {
//     res.status(200)
//     res.setHeader('Content-Type', 'application/json')
//     // console.log(req.body)
//     var resp = req.body
//     console.log(resp['id'])
//     connection.query("UPDATE " + tbl + " SET name= \'" + resp['name'] + "\', email=\'" + resp['email'] + "\',item=\'" + resp['item'] + "\',amount=" + resp['amount'] + ",status=\'" + resp['status'] + "\' where id = " + resp['id'], function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + JSON.stringify(result));
//         res.end(JSON.stringify(result))
//     });
// })

// app.post('/search', (req, res) => {
//     // Display all data
//     res.status(200)
//     res.setHeader('Content-Type', 'application/json')
//     var getStatus = req.body
//     connection.query("SELECT * from " + tbl + " where status = \'" + getStatus['status'] + "\'", function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + JSON.stringify(result));
//         res.end(JSON.stringify(result))
//     });
// })

// app.post('/delete', (req,res) => {
//     res.status(200)
//     res.setHeader('Content-Type', 'application/json')
//     var delId = req.body['delID']

//     connection.query("DELETE from " + tbl + " where id = " + delId, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + JSON.stringify(result));
//         res.end(JSON.stringify(result))
//     });
// })

app.get("/*", (req, res) => {
  res.status(404);
  res.end("<h1>404 Error</h1>");
});

// Http connection
app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
