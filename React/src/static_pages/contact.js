// Write for the Contact page
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message_text, setMessageText] = useState("");
  //const [subject, setSignupStatus] = useState("");

  const sendMessage = () => {
    const message = { name, email, phone_no, subject, message_text };
    console.log(message);
    axios
      .post("http://localhost:3002/contact", message)
      .then((response) => {
        //console.log("Response: ", response);
        //console.log(response);
        //setSignupStatus("Signup successful!");
        //Cookies.set("id", response.data.insertId, { expires: 7 });
        alert("Message Sent");
        alert("We will contact within 24 hours");
        //window.location.href = "/";
      })
      .catch((error) => console.error("Error saving data:", error));
  };
  return (
    <div className="contact">
      <div class="contact-from-section mt-150 mb-150">
        <div class="container">
          <h1 style={{ color: "black", textAlign: "center" }}>Contact Us</h1>
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <br />
              <div class="form-title">
                <h2>Do you have any Questions?</h2>
              </div>
              <div id="form_status"></div>
              <div class="contact-form">
                <form
                  type="POST"
                  id="fruitkha-contact"
                  onsubmit="return validateForm();"
                >
                  <p>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </p>
                  <br />
                  <p>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      value={phone_no}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </p>
                  <br />
                  <p>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                      value={message_text}
                      onChange={(e) => setMessageText(e.target.value)}
                    ></textarea>
                  </p>
                  <br />
                  <input type="hidden" name="token" value="FsWga4&@f6aw" />
                  <br />
                  <p>
                    <input type="submit" value="Submit" onClick={sendMessage} />
                  </p>
                  <br />
                </form>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact-form-wrap">
                <div class="contact-form-box">
                  <h4>
                    <i class="fas fa-map"></i> Shop Address
                  </h4>
                  <p>
                    4th cross <br /> Bhadrappa layout, Bengaluru <br /> India
                  </p>
                </div>
                <div class="contact-form-box">
                  <h4>
                    <i class="far fa-clock"></i> Shop Hours
                  </h4>
                  <p>
                    MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                  </p>
                </div>
                <div class="contact-form-box">
                  <h4>
                    <i class="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    Phone: 9686302284 <br /> Email: support@victorias.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <p>
                {" "}
                <i class="fas fa-map-marker-alt"></i> <h1>Find Our Location</h1>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="embed-responsive embed-responsive-21by9">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7856644338194!2d77.57467377450388!3d13.049310713170936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae187639497fc3%3A0x300c0ebebeda3038!2s4th%20Cross%20Rd%2C%20Bhadrappa%20Layout%2C%20Koti%20Hosahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696674821492!5m2!1sen!2sin"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen=""
            class="embed-responsive-item"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
