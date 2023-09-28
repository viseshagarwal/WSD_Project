import React from "react";
import Cookies from "js-cookie";

const Logout = () => {
  return (
    <div>
      <h1>Logout Page</h1>
      {Cookies.set("id", 0)};<p>You have successfully logged out.</p>
      {(window.location.href = "/")};
    </div>
  );
};

export default Logout;
