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
    
    // <div>
    //   <h1>Signup Page</h1>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <label htmlFor="username">Username</label>
    //   <input
    //     type="text"
    //     id="username"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />

    //   <label htmlFor="email">Email</label>
    //   <input
    //     type="email"
    //     id="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <label htmlFor="password">password</label>
    //   <input
    //     type="password"
    //     id="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />

    //   <label htmlFor="name">Name</label>
    //   <input
    //     type="text"
    //     id="name"
    //     placeholder="Name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />

    //   <label htmlFor="phone">Phone Number</label>
    //   <input
    //     type="tel"
    //     id="phone"
    //     placeholder="Phone Number"
    //     value={phone_no}
    //     onChange={(e) => setPhone(e.target.value)}
    //   />
    //   <br />
    //   <label htmlFor="address">Address</label>
    //   <input
    //     type="text"
    //     id="address"
    //     placeholder="Address"
    //     value={address}
    //     onChange={(e) => setAddress(e.target.value)}
    //   />

    //   <button onClick={handleSignup}>Signup</button>
    //   <p>{signupStatus}</p>
    // </div>
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section class="signup">
        <div class="container">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">Sign up</h2>
              <form method="POST" class="register-form" id="register-form">
                <div class="form-group">
                  <label for="username">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your Username"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="re-pass">
                    <i class="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label for="phone">
                    <i class="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Phone Number"
                    value={phone_no}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="address">
                    <i class="zmdi zmdi-lock-outline"></i>
                  </label>
                  <textarea
                    type="text"
                    id="address"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>

                <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    class="agree-term"
                  />
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in
                    <a href="/tnc" class="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    class="form-submit"
                    value="Register"
                    onClick={handleSignup}
                  />
                </div>
              </form>
            </div>
            <div class="signup-image">
              <figure>
                <img
                  src={process.env.PUBLIC_URL + "signup-image.jpg"}
                  alt="sign-up-img"
                />
              </figure>
              <a href="/Login" class="signup-image-link">
                I am already member
              </a>
            </div>
            <p>{signupStatus}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
