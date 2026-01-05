// Main JavaScript file for Deepak & Sahil Engcon Pvt. Ltd. Mumbai Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Deepak & Sahil Engcon Pvt. Ltd. Mumbai website loaded');
    
    // Initialize navigation
    initNavigation();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize any other features
    initFeatures();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add active state management if needed
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize additional features
function initFeatures() {
    // Add any custom functionality here
    // Example: Form validation, animations, etc.
}

// Utility function for handling external links
function handleExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

// Call external links handler
handleExternalLinks();

