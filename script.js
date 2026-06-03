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

const projectsData = {
    0: {
        title: "CAPSTONE: Prediction of Hatching Time of Chicken Eggs using Machine Learning",
        fullDescription: "Designed and implemented an intelligent egg candling system for automated hatch time prediction using a Raspberry Pi 4 Model B and a custom-trained YOLOv11 computer vision model. The system captures and processes real-time candled egg images, performs embryo development analysis, and generates hatch time predictions through an integrated LCD interface. To improve edge deployment performance, the YOLOv11 model was converted to NCNN, significantly reducing inference overhead and enabling efficient real-time execution on resource-constrained devices such as the Raspberry Pi, while maintaining prediction accuracy.",
        challenge: "Candler error generally results in a 2% to 10% loss margin in total hatch potential, wrong judgement usually results in false positives and false negatives, which can lead to significant economic losses for poultry farmers. ",
        solution: "We designed a simple, intuitive device that utilizes AI/Computer Vision to analyze candled egg images and predict hatching time with high accuracy. The system achieved a 74.89% accuracy in hatch time prediction, demonstrating the potential of AI-driven solutions in improving poultry farming efficiency and reducing economic losses.",
        image: "Images/CapstoneProject/PreviewImage.jpg",
        gallery: [
            "Images/CapstoneProject/PreviewImage2.png",
            "Images/CapstoneProject/PreviewImage3.png",
            "Images/CapstoneProject/PreviewImage4.jpg"
        ],
        technologies: ["Raspberry Pi", "Python", "NCNN", "AI/ML", "Hardware Integration"],
        liveUrl: "#",
        year: "2025"
    },
    1: {
        title: "DIY Hitbox (Fighting Game Controller)",
        fullDescription: "A DIY hitbox system for fighting games, built with Raspberry Pi Pico and custom electronics.",
        challenge: "Traditional hitbox systems are very expensive. ",
        solution: "I created an affordable alternative using a Raspberry Pi Pico, The system features responsive buttons and can be easily customized for different games.",
        image: "https://placehold.co/600x400/1a4d3a/white?text=DIY+Hitbox",
        gallery: [
            "https://placehold.co/400x300/1a4d3a/white?text=Hitbox+Design",
            "https://placehold.co/400x300/2a6d4a/white?text=Demo",
            "https://placehold.co/400x300/3a8d5a/white?text=Gameplay"
        ],
        technologies: ["System Design", "Raspberry Pi Pico", "Python", "GP2040 Firmware"],
        liveUrl: "#",
        year: "2026"
    },
    2: {
        title: "Movies/Series Recommendation System",
        fullDescription: "A recommendation system that suggests movies and series based on user preferences and viewing history.",
        challenge: "With the overwhelming amount of content available on streaming platforms, users often struggle to find movies and series that match their tastes. Traditional recommendation systems can be limited in their ability to understand nuanced preferences and may not provide personalized suggestions.",
        solution: "I developed a recommendation system that utilizes collaborative filtering and content-based filtering techniques to analyze user preferences and viewing history. The system generates personalized recommendations by identifying patterns in user behavior and similarities between movies and series, providing users with tailored suggestions that enhance their streaming experience.",
        image: "https://placehold.co/600x400/2d6a4f/white?text=Recommendation+System",
        gallery: [
            "https://placehold.co/400x300/2d6a4f/white?text=Movies",
            "https://placehold.co/400x300/40916c/white?text=Series",
            "https://placehold.co/400x300/52b788/white?text=Recommendations"
        ],
        technologies: ["DataViz"],
        liveUrl: "#",
        year: "2026"
    }
};

// Make project cards clickable
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        openProjectModal(index);
    });
});

// Modal elements
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

// Function to open modal
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    // Build gallery HTML
    let galleryHtml = '';
    if (project.gallery && project.gallery.length > 0) {
        galleryHtml = `
            <div class="modal-gallery">
                ${project.gallery.map(img => `<img src="${img}" alt="Project screenshot" class="modal-gallery-img">`).join('')}
            </div>
        `;
    }
    
    // Build tech tags HTML
    const techTagsHtml = `
        <div class="modal-tech-tags">
            ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
        </div>
    `;
    
    // Modal content
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-project-img">
        <div class="modal-project-info">
            <h2 class="modal-project-title">${project.title}</h2>
            <p class="modal-project-desc">${project.fullDescription}</p>
            
            <div class="modal-project-details">
                <h4>📋 The Challenge</h4>
                <p>${project.challenge}</p>
                
                <h4>💡 The Solution</h4>
                <p>${project.solution}</p>
            </div>
            
            ${galleryHtml}
            
            <h4>🛠️ Technologies Used</h4>
            ${techTagsHtml}
            
            <div style="display: flex; gap: 16px; margin-top: 24px;">
                <a href="${project.liveUrl}" class="modal-live-link" target="_blank">View Live Project →</a>
                <a href="#" class="modal-live-link" style="background: transparent; border: 1px solid #171717; color: #171717;">View Case Study →</a>
            </div>
            
            <p style="margin-top: 20px; color: #888; font-size: 0.85rem;">Project completed in ${project.year}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
}

// Close modal functions
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});