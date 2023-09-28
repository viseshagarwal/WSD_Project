import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_no, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [signupStatus, setSignupStatus] = useState("");

  const handleSignup = () => {
    const newUser = { username, email, password, name, phone_no, address };
    console.log(newUser);
    axios
      .post("http://localhost:3002/signup", newUser)
      .then((response) => {
        //console.log("Response: ", response);
        //console.log(response);
        setSignupStatus("Signup successful!");
        Cookies.set("id", response.data.insertId, { expires: 7 });
        alert("Signup successful!");
        window.location.href = "/";
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        placeholder="Phone Number"
        value={phone_no}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>
      <p>{signupStatus}</p>
    </div>
  );
};

export default Signup;
