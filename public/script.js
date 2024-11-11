// Select all elements with the scroll-appear class
const scrollAppearElements = document.querySelectorAll('.scroll-appear');

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'visible' class when the element is in the viewport
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: stop observing after becoming visible
        }
    });
}, { threshold: 0.5 }); // Trigger when 10% of the element is in view

// Observe each scroll-appear element
scrollAppearElements.forEach(el => observer.observe(el));