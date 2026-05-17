// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            // Animate hamburger to X
            const hamburger = document.querySelector('.hamburger');
            hamburger.classList.toggle('active');
        });
    }
    
    // Form validation
    const form = document.getElementById('signup-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const company = document.getElementById('company').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            // Simple validation
            if (name === '' || email === '') {
                alert('Please fill in all required fields');
                return;
            }
            
            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // If validation passes
            alert('Thank you for your interest! We will be in touch shortly.');
            form.reset();
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navbar && navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    const hamburger = document.querySelector('.hamburger');
                    if (hamburger) hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Add active class to hamburger when clicked (for animation)
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});