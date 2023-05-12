// Get the form element
const form = document.getElementById('contact-form');

// Add a listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input values
  const name = document.getElementById('form4Example1').value;
  const email = document.getElementById('form4Example2').value;
  const message = document.getElementById('form4Example3').value;

  // Validate the name field
  if (name === '') {
    alert('Name is required.');
    return;
  }

  // Validate the email field
  if (email === '') {
    alert('Email is required.');
    return;
  } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate the message field
  if (message === '') {
    alert('Message is required.');
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
});

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log('email');



