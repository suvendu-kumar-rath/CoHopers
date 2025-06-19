// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// (Optional) Carousel dot activation logic
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        // Add logic to change hero image/content if needed
    });
}); 

// Pricing Plan Section

document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more-btn');
    const moreCards = document.getElementById('more-pricing-cards');
    if (seeMoreBtn && moreCards) {
        let expanded = false;
        seeMoreBtn.addEventListener('click', function() {
            expanded = !expanded;
            if (expanded) {
                moreCards.style.display = 'block';
                seeMoreBtn.textContent = 'See Less';
            } else {
                moreCards.style.display = 'none';
                seeMoreBtn.textContent = 'See More';
            }
        });
    }
});

// Function to initialize the form
function initializeForm() {
    console.log('Attempting to initialize form...'); // Debug log
    
    // Get the form element
    const contactForm = document.querySelector('.contactus-form');
    console.log('Form element found:', contactForm); // Debug log
    
    // Check if form exists
    if (!contactForm) {
        console.log('Form not found, will retry in 100ms...'); // Debug log
        setTimeout(initializeForm, 100); // Retry after 100ms
        return;
    }
    
    // Add submit event listener
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted'); // Debug log
        
        // Get form values directly from form elements
        const name = contactForm.querySelector('#name').value;
        const company = contactForm.querySelector('#companyname').value;
        const email = contactForm.querySelector('#email').value;
        const workspace = contactForm.querySelector('#workspace').value;
        const mobile = contactForm.querySelector('#mobile').value;
        
        // Validate form
        if (!name || !email || !workspace || !mobile) {
            alert('Please fill in all required fields');
            return;
        }
        
        console.log('Form data collected:', { name, company, email, workspace, mobile }); // Debug log
        
        // Create email body
        const body = `Name: ${name}\n` +
                    `Company Name: ${company}\n` +
                    `Email: ${email}\n` +
                    `WorkSpace Type: ${workspace}\n` +
                    `Mobile: ${mobile}`;
        
        // Create Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@cohopers.in&su=${encodeURIComponent('enquiry from cohopers')}&body=${encodeURIComponent(body)}`;
        
        console.log('Redirecting to:', gmailUrl); // Debug log
        
        // Redirect to Gmail
        window.location.href = gmailUrl;
    });
}

// Start the initialization process
initializeForm();

