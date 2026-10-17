# AI & Full-Stack Developer Portfolio

A modern, high-impact personal portfolio website showcasing expertise in Artificial Intelligence, Machine Learning, Python, and Full-Stack Web Development. Built with a clean, coding-inspired design perfect for recruiters, clients, and startups.

## 🚀 Features

- **Modern Dark-Mode Design**: Coding-inspired UI with terminal aesthetics
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Interactive Elements**: Dynamic skill bars, project cards, and timeline
- **Professional Sections**:
  - Hero section with terminal-style introduction
  - About me with background and journey
  - Skills showcase (AI/ML, Programming, Full-Stack, Tools)
  - Featured projects with tech stacks
  - Client projects & experience timeline
  - Certifications & achievements
  - Contact form and social links

## 📁 Project Structure

```
portFolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, grid
- **JavaScript (Vanilla)**: No frameworks, pure JS for performance
- **Font Awesome**: Icons
- **Google Fonts**: Fira Code (monospace) & Inter (sans-serif)

## 🎨 Design Features

- Dark color scheme with neon accents
- Terminal/command-line inspired hero section
- Code snippet styling throughout
- Smooth scroll animations
- Interactive skill progress bars
- Hover effects on cards and buttons
- Responsive navigation with mobile menu

## 📝 Setup Instructions

### Option 1: Direct File Opening
1. Simply open `index.html` in your web browser
2. No build process or dependencies required!

### Option 2: Local Server (Recommended)
For the best experience, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` in your browser.

## ✏️ Customization Guide

### Personal Information

1. **Hero Section** (`index.html`):
   - Update the name and titles in the terminal output
   - Modify the intro text
   - Update social media links

2. **About Section**:
   - Replace the about text with your own story
   - Update statistics (projects, years, etc.)

3. **Skills Section**:
   - Adjust skill percentages in `data-width` attributes
   - Add/remove skills as needed
   - Update skill categories

4. **Projects Section**:
   - Replace project cards with your actual projects
   - Update GitHub and demo links
   - Modify tech stacks

5. **Experience Section**:
   - Add your real client projects and experiences
   - Update dates, companies, and descriptions

6. **Certifications**:
   - Replace with your actual certifications
   - Update dates and issuers

7. **Contact Section**:
   - Update email address
   - Add your LinkedIn and GitHub URLs
   - Configure form submission (currently logs to console)

### Colors & Styling

Edit CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0a0e27;        /* Main background */
    --bg-secondary: #0f1629;      /* Card backgrounds */
    --accent-primary: #00d9ff;     /* Primary accent (cyan) */
    --accent-secondary: #7c3aed;  /* Secondary accent (purple) */
    --text-primary: #e2e8f0;      /* Main text color */
    /* ... more variables */
}
```

### Contact Form

The contact form currently logs to console. To make it functional:

1. **Backend Integration**: Connect to a backend service (e.g., Formspree, EmailJS, or your own API)
2. **EmailJS Example**:
   ```javascript
   // In script.js, replace form handler with:
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
       .then(() => {
           // Success message
       });
   ```

### CV Download

Update the download CV button in `script.js`:

```javascript
downloadCV.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf';
    link.download = 'YourName_CV.pdf';
    link.click();
});
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 968px - 1199px
- **Mobile**: Below 968px
- **Small Mobile**: Below 640px

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select your branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Other Options
- AWS S3 + CloudFront
- Google Cloud Storage
- Any static hosting service

## 🔧 Performance Tips

- Images: Use optimized images (WebP format recommended)
- Lazy Loading: Already implemented for images with `data-src`
- Minification: Minify CSS and JS for production
- CDN: Consider using CDN for fonts and icons

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them!

## 📧 Contact

For questions or suggestions about this portfolio template, feel free to reach out!

---

**Built with ❤️ for developers who love clean code and beautiful design.**






