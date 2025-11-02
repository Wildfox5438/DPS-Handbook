document.addEventListener("DOMContentLoaded", () => {
    
    // Select all elements you want to animate
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    if ("IntersectionObserver" in window) {
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the element is on the screen
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Tell the observer to watch each of our animated elements
        animatedElements.forEach(el => {
            observer.observe(el);
        });

    } else {
        // Fallback for very old browsers
        animatedElements.forEach(el => {
            el.classList.add("is-visible");
        });
    }
});

