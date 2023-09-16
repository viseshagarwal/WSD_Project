// Client-side JavaScript logic
// Implement functionality like course selection, form handling, etc.

// Course selection
function courseSelection() {
  var course = document.getElementById("course").value;
  var courseText = document.getElementById("courseText");
  courseText.innerHTML = course;
}

// Form handling
function formHandling() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var nameText = document.getElementById("nameText");
  var emailText = document.getElementById("emailText");
  var phoneText = document.getElementById("phoneText");

  nameText.innerHTML = name;
  emailText.innerHTML = email;
  phoneText.innerHTML = phone;
}

// Form validation
function formValidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");

  if (name == "") {
    nameError.innerHTML = "Please enter your name";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "";
  }

  if (email == "") {
    emailError.innerHTML = "Please enter your email";
    emailError.style.color = "red";
  } else {
    emailError.innerHTML = "";
  }

  if (phone == "") {
    phoneError.innerHTML = "Please enter your phone number";
    phoneError.style.color = "red";
  } else {
    phoneError.innerHTML = "";
  }
}

// Form reset
function formReset() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var nameText = document.getElementById("nameText");
  var emailText = document.getElementById("emailText");
  var phoneText = document.getElementById("phoneText");

  nameText.innerHTML = "";
  emailText.innerHTML = "";
  phoneText.innerHTML = "";
}

// Form submission
function formSubmission() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var nameText = document.getElementById("nameText");
  var emailText = document.getElementById("emailText");
  var phoneText = document.getElementById("phoneText");

  nameText.innerHTML = name;
  emailText.innerHTML = email;
  phoneText.innerHTML = phone;
}

// Form submission with validation
