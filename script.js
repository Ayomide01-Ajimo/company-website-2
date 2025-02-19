// Show alert when form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload
    alert("Your message has been sent successfully!");
});
