import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_no, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [signupStatus, setSignupStatus] = useState("");

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (username.length == 0) {
      alert("Invalid Form, Username can not be empty");
      return;
    }

    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      alert("Invalid Form, Email Address can not be empty");
      return;
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      alert(
        "Invalid Form, Password must contain greater than or equal to 8 characters."
      );
      return;
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0;
    // variable to count lowercase characters in the password.
    let countLowerCase = 0;
    // variable to count digit characters in the password.
    let countDigit = 0;
    // variable to count special characters in the password.
    let countSpecialCharacters = 0;

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++;
      } else {
        if (password[i] == password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++;
        }
        if (password[i] == password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++;
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      alert("Invalid Form, 0 lower case characters in password");
      return;
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      alert("Invalid Form, 0 upper case characters in password");
      return;
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      alert("Invalid Form, 0 digit characters in password");
      return;
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      alert("Invalid Form, 0 special characters in password");
      return;
    }

    // if all the conditions are valid, this means that the form is valid

    //alert("Form is valid");
    return false;
  }

  const handleSignup = (event) => {
    event.preventDefault(); // prevent default form submission behavior
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

      <section class="signup">
        <div class="container">
          <div class="signup-content">
            <div class="signup-form">
              <h2 style={{ color: "black !important" }}>Sign up</h2>
              <br />
              <form
                method="POST"
                class="register-form"
                id="register-form"
                onSubmit={handleSignup}
              >
                <div class="form-group">
                  <label for="username">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your Username"
                  />
                </div>
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="text"
                    id="email"
                    required
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
                    required
                    id="password"
                    placeholder="Password"
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
                    id="repassword"
                    required
                    placeholder="Re-enter Password"
                    value={repassword}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>

                <div class="form-group">
                  <label for="phone">
                    <i class="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="tel"
                    required
                    id="phone"
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
                    required
                    placeholder="Address"
                    style={{ height: "80px", width: "275px" }}
                    d
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    required
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
                    required
                    class="form-submit"
                    value="Register"
                    // onClick={handleSignup}
                    onClick={(event) => {
                      console.log("clicked");
                      if (validateForm()) {
                        console.log("before valid");
                        handleSignup(event);
                        console.log("after valid");
                      }
                    }}
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
