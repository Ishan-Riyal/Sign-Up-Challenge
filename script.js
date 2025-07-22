// Select elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailMessage = document.getElementById("emailMessage");
const passwordMessage = document.getElementById("passwordMessage");
const successMessage = document.getElementById("successMessage");
const form = document.getElementById("signupForm");

// Validation functions
function validateEmail(value) {
  value = value.trim();
  return value.length > 3 && value.includes("@") && value.includes(".");
}

function validatePassword(value) {
  return value.trim().length > 8;
}

function showValidationMessages() {
  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);

  if (!isEmailValid) {
    emailMessage.textContent = "Email must be valid and contain '@' and '.'";
  } else {
    emailMessage.textContent = "";
  }

  if (!isPasswordValid) {
    passwordMessage.textContent = "Password must be more than 8 characters";
  } else {
    passwordMessage.textContent = "";
  }

  // Show success message if both are valid
  if (isEmailValid && isPasswordValid) {
    successMessage.textContent = "All good to go!";
  } else {
    successMessage.textContent = "";
  }
}

// Event listeners for real-time validation
emailInput.addEventListener("input", showValidationMessages);
passwordInput.addEventListener("input", showValidationMessages);

// Form submission handler
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const confirmSubmit = confirm("Do you want to submit the form?");

  if (confirmSubmit) {
    alert("Successful signup!");
  } else {
    form.reset();
    emailMessage.textContent = "";
    passwordMessage.textContent = "";
    successMessage.textContent = "";
    emailInput.focus(); // Optional UX boost
  }
});
