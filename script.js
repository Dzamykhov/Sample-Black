document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        setTimeout(function() {
            form.reset();
            successMessage.style.display = "block";
        }, 500);
    });
});
