/* ===================================
   PERSONAL PORTFOLIO - JAVASCRIPT
   Smooth Animations & Interactivity
   =================================== */

// ==================
// SMOOTH SCROLLING
// ==================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// ==================
// ACTIVE NAV LINK
// ==================
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ==================
// NAVBAR SCROLL EFFECT
// ==================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.boxShadow = '0 0.618rem 1.618rem rgba(31, 71, 102, 0.15)';
  } else {
    navbar.style.boxShadow = '0 1.618rem 2.618rem rgba(31, 71, 102, 0.25)';
  }

  lastScroll = currentScroll;
});

// ==================
// SCROLL ANIMATIONS
// ==================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill progress bars when visible
      if (entry.target.classList.contains('skill-card')) {
        const progressBar = entry.target.querySelector('.progress-bar');
        if (progressBar) {
          const width = progressBar.style.width;
          progressBar.style.width = '0';
          setTimeout(() => {
            progressBar.style.width = width;
          }, 100);
        }
      }
    }
  });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
  // Add scroll-fade class to elements
  const skillCards = document.querySelectorAll('.skill-card');
  const projectCards = document.querySelectorAll('.project-card');
  const aboutSection = document.querySelector('.about-content');

  skillCards.forEach(card => {
    card.classList.add('scroll-fade');
    observer.observe(card);
  });

  projectCards.forEach(card => {
    card.classList.add('scroll-fade');
    observer.observe(card);
  });

  if (aboutSection) {
    aboutSection.classList.add('scroll-fade');
    observer.observe(aboutSection);
  }
});

// ==================
// FORM HANDLING WITH EMAILJS
// ==================
// Initialize EmailJS with your public key
// IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
// Get it from: https://dashboard.emailjs.com/admin/account
(function () {
  emailjs.init('sK0fTFH0YowmdA-gY'); // Replace with your public key
})();

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      showFormStatus('Please fill in all fields.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Show sending status
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';

    try {
      // Send email using EmailJS
      // IMPORTANT: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
      const response = await emailjs.send(
        'service_s8o8lou',    // Replace with your EmailJS service ID
        'template_t1y1vk4',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'amrkhaledwork9@gmail.com'
        }
      );

      console.log('Email sent successfully:', response);

      // Show success message
      showFormStatus('Thank you for your message! I\'ll get back to you soon.', 'success');

      // Reset form
      contactForm.reset();

    } catch (error) {
      showFormStatus('Something went wrong. Please try again later.', 'error');
      console.error('Form submission error:', error);
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });
}

function showFormStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
  formStatus.style.display = 'block';

  // Hide message after 5 seconds
  setTimeout(() => {
    formStatus.style.display = 'none';
  }, 5000);
}

// ==================
// TYPING EFFECT (Optional Enhancement)
// ==================
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ==================
// PROJECT CARD TILT EFFECT
// ==================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ==================
// PARALLAX EFFECT FOR HERO
// ==================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');

  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
  }
});

// ==================
// CURSOR GLOW EFFECT (Optional)
// ==================
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // You can create a custom cursor glow effect here if needed
  // This is optional and can be removed if not desired
});

// ==================
// LAZY LOAD IMAGES (Future Enhancement)
// ==================
// If you add real images later, implement lazy loading here
const lazyImages = document.querySelectorAll('img[data-src]');

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================
// PERFORMANCE OPTIMIZATION
// ==================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

// Apply debounce to scroll-heavy functions if needed
const debouncedUpdateNav = debounce(updateActiveNav, 20);
window.addEventListener('scroll', debouncedUpdateNav);

// ==================
// CONSOLE MESSAGE
// ==================
console.log('%c👋 Welcome to my portfolio!', 'color: #4682B4; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, JavaScript & Bootstrap 5', 'color: #2B7AC4; font-size: 14px;');
console.log('%cDesigned using Golden Ratio principles (φ = 1.618)', 'color: #1F4766; font-size: 12px;');

// ==================
// INITIALIZE ON LOAD
// ==================
window.addEventListener('load', () => {
  // Update active nav on initial load
  updateActiveNav();

  // Add loaded class to body for any CSS transitions
  document.body.classList.add('loaded');

  console.log('✅ Portfolio loaded successfully!');
});
