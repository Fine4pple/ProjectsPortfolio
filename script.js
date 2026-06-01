// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, null, href);
        }
    });
});

// Contact form handler
const form = document.getElementById('demo-contact-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields before sending.');
            return;
        }
        
        alert(`Thanks ${name}! Your message has been received. (demo mode)\nI'll get back to you soon at ${email}.`);
        form.reset();
    });
}

console.log('Portfolio ready — deploy to Vercel with ease!');