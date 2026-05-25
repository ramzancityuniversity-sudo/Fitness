// Smooth scroll to contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Contact form (fake backend simulation)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  document.getElementById("status").innerText =
    "Message sent successfully!";

  // reset form
  this.reset();

  console.log({ name, email, message });
});