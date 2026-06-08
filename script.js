// Copy referral link to clipboard
function copyToClipboard() {
    const referralLink = document.getElementById('referralLink');
    const btnText = document.getElementById('btnText');
    
    // Select the text
    referralLink.select();
    referralLink.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy to clipboard
    navigator.clipboard.writeText(referralLink.value).then(() => {
        // Change button text temporarily
        const originalText = btnText.textContent;
        btnText.textContent = '✓ Copied!';
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            btnText.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please try again.');
    });
}

// Copy referral code to clipboard
function copyCode() {
    const code = 'immense-eel-795';
    
    navigator.clipboard.writeText(code).then(() => {
        // Get the button and change its text
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please try again.');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to benefit cards and steps
document.querySelectorAll('.benefit-card, .steps li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
