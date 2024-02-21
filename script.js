// script.js

// Responsive Navbar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        // Submit the form (you can replace this with your own logic)
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

function isValidEmail(email) {
    // Regular expression for validating email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}