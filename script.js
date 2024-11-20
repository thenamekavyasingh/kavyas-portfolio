// Display a message on form submission
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("contactMessage").textContent = "Thank you for your message - Kavya 😊";
});
// Select all elements with the fade-in class
const fadeElements = document.querySelectorAll('.fade-in');

// Create an Intersection Observer to detect when an element enters the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add animate class
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
});

// Observe each fade-in element
fadeElements.forEach((el) => observer.observe(el));
