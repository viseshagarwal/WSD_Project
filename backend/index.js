const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require('dotenv').config(); 
const port = 3002;

const tbl = "user_login";
const tbl1 = "products";

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//const express = require("express");
const cookieParser = require("cookie-parser");

var corsOptions = {
  origin: "*",
  methods: "GET",
  optionsSuccessStatus: 200, 
};

// MySQl connection
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: db,
// });

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port:  process.env.DB_PORT,
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
  //console.log(resp["id"]);
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

// app.post("/checkout", (req, res) => {
//   res.status(200);
//   res.setHeader("Content-Type", "application/json");
//   console.log(req.body);
//   var resp = req.body;
//   console.log(resp["user_id"]);
//   console.log(resp["totalAmount"]);
//   // Make a connection to the database
//   connection.query(
//     "INSERT into orders (user_id, amt) VALUES (" +
//       resp["user_id"] +
//       "," +
//       resp["totalAmount"] +
//       ")"
//   );
// });

// app.post("/checkout", (req, res) => {
//   //console.log(req.body);
//   const resp = req.body;

//   // Make a connection to the database
//   connection.query(
//     "INSERT INTO orders (user_id, amt) VALUES (?, ?)",
//     [resp["user_id"], resp["totalAmount"]],
//     (error, results) => {
//       if (error) {
//         console.error("Error inserting into the database:", error);
//         res.status(500).send("Error inserting into the database");
//       } else {
//         console.log("Order placed successfully.");
//         orderId = results.insertId;
//         //console.log(orderId);
//         res.status(200).json({ message: "Order placed successfully." });
//       }
//     }
//   );

//   console.log("the order id is", orderId);

//   const cartItems = resp.cartItems;
//   for (const itemID in cartItems) {
//     const quantity = cartItems[itemID];
//     console.log("the order id isdcd  ", orderId);
//     if (quantity > 0) {
//       //console.log(quantity, itemID, resp["user_id"]);
//       // Insert data for items with non-zero quantity
//       // connection.query(
//       //   "INSERT INTO orders_details (order_id,  qty, product_id, user_id) VALUES (?, ?, ?, ?)",
//       //   [results.insertId, quantity, itemID, resp["user_id"]],
//       //   (error) => {
//       //     if (error) {
//       //       console.error("Error inserting into the database:", error);
//       //     } else {
//       //       console.log("Data inserted successfully.");
//       //     }
//       //   }
//       // );
//     }
//   }
// });

app.post("/checkout", (req, res) => {
  const resp = req.body;

  // Insert the order
  connection.query(
    "INSERT INTO orders (user_id, amt) VALUES (?, ?)",
    [resp.user_id, resp.totalAmount],
    (error, results) => {
      if (error) {
        console.error("Error inserting into the database:", error);
        res.status(500).send("Error inserting into the database");
      } else {
        console.log("Order placed successfully.");
        const orderId = results.insertId;

        // Access cartItems from resp
        const cartItems = resp.cartItems;

        // Iterate through the object keys
        for (const itemID in cartItems) {
          const quantity = cartItems[itemID];

          if (quantity > 0) {
            console.log("Order ID:", orderId);
            console.log("Item ID:", itemID);
            console.log("Quantity:", quantity);

            // Insert data for items with non-zero quantity
            connection.query(
              "INSERT INTO order_details (order_id,  qty, product_id, user_id) VALUES (?, ?, ?,?)",
              [orderId, quantity, itemID, resp["user_id"]],
              (error) => {
                if (error) {
                  console.error("Error inserting into the database:", error);
                } else {
                  console.log("Data inserted successfully.");
                }
              }
            );
          }
        }

        res.status(200).json({ message: "Order placed successfully." });
      }
    }
  );
});

// connection.query(
//   "INSERT INTO orders_details (order_id,  qty, product_id, user_id) VALUES (?, ?, ?,?)",
//   [results.insertId, 5, 10,resp["user_id"]],
//   (error, results) => {}
// );

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

//app.use(bodyParser.json());
app.get("/Orders", (req, res) => {
  const receivedVariable = req.query.variableName;
  //res.json({ receivedVariable });
  //console.log(receivedVariable);
  // Display all data
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  //console.log(req.body.user_id);
  connection.query(
    // "SELECT orders.order_id, orders.amt, order_details.order_time, products.productName, products.price FROM user_login INNER JOIN (products INNER JOIN (orders INNER JOIN order_details ON orders.order_id = order_details.order_id) ON products.ID = order_details.product_id) ON user_login.ID = orders.user_id where user_login.id= " +
    "SELECT orders.order_id, user_login.ID, orders.amt, order_details.order_time, products.productName, products.price, products.productImage FROM user_login INNER JOIN (products INNER JOIN (orders INNER JOIN order_details ON orders.order_id = order_details.order_id) ON products.ID = order_details.product_id) ON user_login.ID = orders.user_id where user_login.id= " +
      receivedVariable,
    function (err, result) {
      if (err) throw err;
      //console.log("Result: " + JSON.stringify(result));
      res.end(JSON.stringify(result));
    }
  );
});

app.post("/contact", (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  // console.log(req.body)
  var resp = req.body;
  console.log(resp);
  connection.query(
    "INSERT into messages ( name,email, phone, subject, message ) VALUES ('" +
      resp["name"] +
      "','" +
      resp["email"] +
      "','" +
      resp["phone_no"] +
      "','" +
      resp["subject"] +
      "','" +
      resp["message_text"] +
      "')",
    function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
      res.end(JSON.stringify(result));
    }
  );
});

app.get("/*", (req, res) => {
  res.status(404);
  res.end("<h1>404 Error</h1>");
});

// Http connection
app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
