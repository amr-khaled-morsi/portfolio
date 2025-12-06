# 🎨 Personal Portfolio Website - Amr Khaled

Link: https://amr-khaled-morsi.github.io/portfolio/
A modern, responsive personal portfolio website built with **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap 5**, featuring a comprehensive **Golden Ratio** design system with an elegant **monochrome black, grey, and white gradient** color palette.

![Portfolio Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Design System](#design-system)
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Sections](#sections)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [License](#license)

---

## 🌟 Overview

This portfolio website showcases professional work, skills, and contact information with a clean, modern, and minimalistic design. The entire design is based on the **Golden Ratio (φ = 1.618)**, creating harmonious proportions throughout the site.

**Key Highlights:**
- ✨ Golden Ratio-based design system
- 🎨 Elegant monochrome black, grey, and white gradient palette
- 📧 Functional contact form with EmailJS integration
- 📱 Fully responsive on all devices
- 🚀 Smooth animations and transitions
- ♿ Accessible and semantic HTML
- ⚡ Optimized performance

---

## 🎨 Design System

### Color Palette (Monochrome Gradient)

The website features an elegant **monochrome color scheme** with black, grey, and white gradients, creating a sophisticated and timeless aesthetic:

| Color Name | HEX Code | RGB Values | Usage |
|------------|----------|------------|-------|
| **Black** | `#000000` | `rgb(0, 0, 0)` | Primary backgrounds, headers, dark elements |
| **Dark Grey** | `#1a1a1a` | `rgb(26, 26, 26)` | Secondary backgrounds, cards |
| **Medium Grey** | `#333333` | `rgb(51, 51, 51)` | Borders, dividers |
| **Light Grey** | `#666666` | `rgb(102, 102, 102)` | Secondary text, muted elements |
| **Very Light Grey** | `#cccccc` | `rgb(204, 204, 204)` | Subtle backgrounds, hover states |
| **Off-White** | `#f5f5f5` | `rgb(245, 245, 245)` | Light backgrounds, cards |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Primary text on dark backgrounds, pure white elements |

#### Gradient Combinations

```css
/* Hero Section Gradient */
background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%);

/* Card Hover Effects */
background: linear-gradient(to bottom, #f5f5f5, #ffffff);

/* Accent Gradients */
background: linear-gradient(90deg, #666666, #999999);
```

### Typography Scale (Golden Ratio)

Based on 1rem = 16px with φ = 1.618:

| Size Name | CSS Variable | rem Value | px Value | Calculation |
|-----------|--------------|-----------|----------|-------------|
| Extra Small | `--font-xs` | `0.618rem` | `9.888px` | 1 ÷ φ |
| Small | `--font-sm` | `0.786rem` | `12.576px` | 1 ÷ √φ |
| Base | `--font-base` | `1rem` | `16px` | Base |
| Large | `--font-lg` | `1.272rem` | `20.352px` | √φ |
| X-Large | `--font-xl` | `1.618rem` | `25.888px` | φ |
| 2X-Large | `--font-2xl` | `2.618rem` | `41.888px` | φ² |
| 3X-Large | `--font-3xl` | `4.236rem` | `67.776px` | φ³ |
| 4X-Large | `--font-4xl` | `6.854rem` | `109.664px` | φ⁴ |

**Line Height:** 1.618 (Golden Ratio) for optimal readability

### Spacing System (Golden Ratio)

| Size | CSS Variable | rem Value | px Value |
|------|--------------|-----------|----------|
| Extra Small | `--space-xs` | `0.382rem` | `6.112px` |
| Small | `--space-sm` | `0.618rem` | `9.888px` |
| Medium | `--space-md` | `1rem` | `16px` |
| Large | `--space-lg` | `1.618rem` | `25.888px` |
| X-Large | `--space-xl` | `2.618rem` | `41.888px` |
| 2X-Large | `--space-2xl` | `4.236rem` | `67.776px` |
| 3X-Large | `--space-3xl` | `6.854rem` | `109.664px` |

---

## ✨ Features

### ⚡ Performance
- Optimized CSS with custom properties
- Debounced scroll events
- Intersection Observer for efficient animations
- Lazy loading support

### 🎭 Animations
- Smooth fade-in on scroll
- Parallax effects in hero section
- 3D tilt effect on project cards
- Progress bar animations
- Smooth page transitions

### 📱 Responsive Design
- Mobile-first approach
- Bootstrap 5 grid system
- Breakpoints: 576px, 768px, 992px, 1200px
- Optimized for all screen sizes

### ♿ Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Proper heading hierarchy
- High contrast ratios
- Keyboard navigation support

### 🔧 Interactive Features
- Smooth scroll navigation
- Active nav link highlighting
- **EmailJS integration** for functional contact form
- Form validation with real-time feedback
- Dynamic navbar on scroll
- Hover effects and micro-animations
- Email notifications sent to `amrkhaledwork9@gmail.com`

---

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet (Golden Ratio design system)
├── js/
│   └── script.js      # JavaScript for interactivity
├── images/            # Image assets (placeholder icons used)
└── README.md          # Documentation
```

---

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML, CSS, and JavaScript

### Steps

1. **Clone or Download** the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **No installation needed!** This is a static website with no dependencies.

3. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local development server (optional)

---

## 💻 Usage

### Method 1: Direct File Opening
```bash
# Navigate to the project folder
cd Portfolio

# Open index.html in your default browser (Windows)
start index.html

# Open index.html in your default browser (macOS)
open index.html

# Open index.html in your default browser (Linux)
xdg-open index.html
```

### Method 2: Using a Local Server (Recommended)

#### Using Python
```bash
# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

#### Using Node.js (http-server)
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000

# Then visit: http://localhost:8000
```

#### Using VS Code Live Server
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📄 Sections

### 1. **Hero Section**
- Full-screen introduction
- Name and professional title
- Professional introduction
- Call-to-action buttons
- Gradient background with animations

### 2. **About Me**
- Professional biography
- Passion statement
- Two-column layout with visual element

### 3. **Skills**
- Four primary skills: HTML, CSS, JavaScript, Bootstrap 5
- Bootstrap 5 card components
- Progress bars with percentage
- Skill level badges
- Hover animations

### 4. **Projects**
- Six project showcase cards
- Placeholder icons (using Bootstrap Icons)
- Project descriptions
- Technology tags
- Hover overlay with "View Project" button
- 3D tilt effect on hover

### 5. **Contact**
- **EmailJS integration** for sending emails
- Bootstrap 5 form components
- Floating labels
- Real-time form validation
- Success/error messages with visual feedback
- Emails sent directly to `amrkhaledwork9@gmail.com`
- Clean, accessible layout

### 6. **Footer**
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Copyright information
- Gradient background
- Icon hover effects

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --color-black: #000000;
    --color-dark-grey: #1a1a1a;
    --color-medium-grey: #333333;
    --color-light-grey: #666666;
    --color-white: #ffffff;
    /* Customize gradients and other color values */
}
```

### Configuring EmailJS

To set up the contact form with your own EmailJS account:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the credentials in `js/script.js`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
4. Update the service and template IDs in the send function
5. See `EMAILJS_SETUP_GUIDE.md` for detailed instructions

### Updating Content

1. **Personal Information:** Edit `index.html`
   - Line 77: Change name
   - Line 78: Change title
   - Line 79-82: Update description

2. **About Section:** Lines 93-113
3. **Skills:** Lines 120-215
4. **Projects:** Lines 222-359
5. **Footer Social Links:** Lines 386-399

### Adding Real Images

Replace placeholder icons in project cards:
```html
<!-- Replace this: -->
<div class="project-placeholder">
    <i class="bi bi-laptop"></i>
</div>

<!-- With this: -->
<img src="images/project1.jpg" alt="Project Name">
```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

**Note:** Internet Explorer is not supported due to modern CSS and JavaScript features.

---

## 📝 Technical Details

### Technologies Used
- **HTML5:** Semantic markup, accessibility features
- **CSS3:** Custom properties, flexbox, grid, animations
- **JavaScript (ES6+):** Modern syntax, Intersection Observer API
- **Bootstrap 5.3.2:** Grid system, components, utilities
- **Bootstrap Icons:** Icon library
- **Google Fonts:** Inter font family

### Performance Optimizations
- CSS custom properties for efficient styling
- Debounced scroll events (20ms)
- Intersection Observer for scroll animations
- Optimized selectors and minimal repaints
- Print-optimized styles

---

## 📊 Design Philosophy

This portfolio follows the **Golden Ratio (φ = 1.618)** principle consistently:

1. **Color Harmony:** Monochrome palette with carefully balanced gradients
2. **Typography:** Font sizes scale by φ for visual hierarchy
3. **Spacing:** All margins and paddings use φ-based spacing
4. **Layout:** Component proportions follow golden ratio
5. **Timing:** Animation durations relate to φ

**Why Golden Ratio?**
- Creates natural, pleasing proportions
- Enhances visual hierarchy
- Improves readability
- Professional and timeless aesthetic

**Why Monochrome?**
- Timeless and sophisticated aesthetic
- Excellent readability and contrast
- Professional appearance
- Focuses attention on content
- Versatile and adaptable

---

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Report bugs or issues
- Suggest improvements

---

## 📜 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Amr Khaled Morsi**
- Email: amrkhaledwork9@gmail.com
- GitHub: [@amr-khaled-morsi](https://github.com/amr-khaled-morsi)
- LinkedIn: [Amr Khaled Morsi](https://linkedin.com/in/amr-khaled-morsi)

---

## 🙏 Acknowledgments

- **Bootstrap Team** for the excellent CSS framework
- **Google Fonts** for the Inter font family
- **Bootstrap Icons** for the comprehensive icon set
- **Golden Ratio** for timeless design principles

---

## 📞 Support

If you have questions or need help:
1. Check the [Browser Console] for any JavaScript errors
2. Ensure all file paths are correct
3. Use a local server for best results
4. Check browser compatibility

---

**Built with 🖤 using the Golden Ratio design philosophy and monochrome aesthetics**

*Last Updated: December 2025*
