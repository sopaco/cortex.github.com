# Cortex Memory Official Website

This is the official website for the Cortex Memory project, designed to introduce developers to the project's core features, performance, and value proposition.

## 🎯 Website Objectives

- **User-Centric Presentation**: Showcase Cortex Memory's core value from a developer's perspective
- **Highlight Core Features**: Intelligent fact extraction, semantic vector search, automated memory optimization, etc.
- **Demonstrate Performance Advantages**: Present significant performance improvements over LangMem through benchmark data
- **Drive GitHub Traffic**: Guide visitors to the GitHub repository for stars and community participation

## 📁 File Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # Interactive scripts
├── i18n.js         # Internationalization (i18n) translations
└── README.md       # This documentation
```

## ✨ Website Features

### Design Philosophy
- **Modern Design**: Gradient colors, card-based layouts, smooth animations
- **Responsive Layout**: Perfect adaptation for desktop, tablet, and mobile devices
- **Professional Color Scheme**: Purple-themed, conveying AI-tech aesthetics
- **Smooth Interactions**: Smooth scrolling, hover effects, entrance animations

### Core Sections

1. **Hero Section**: Eye-catching title and core data showcase
2. **Comparison**: Before/After comparison highlighting value proposition
3. **Core Features**: 6 major feature cards
4. **Performance Benchmark**: Detailed comparison data vs LangMem
5. **How It Works**: 4-step workflow visualization
6. **Ecosystem**: Complete modular component introduction
7. **Use Cases**: 4 real-world application scenarios
8. **Get Started**: 3-step installation guide + quick links
9. **CTA (Call-to-Action)**: Drive GitHub visits

## 🌐 Internationalization (i18n)

The website supports bilingual content:
- **Chinese (zh-CN)**: Default language
- **English (en)**: Full English translation

Users can switch languages using the language toggle button in the navigation bar. Language preference is stored in `localStorage`.

## 🚀 Local Preview

### Method 1: Direct File Open
```bash
# Open in browser
open website/index.html
# Or use your browser
google-chrome website/index.html
```

### Method 2: Local Server
```bash
# Using Python
cd website
python3 -m http.server 8080

# Using Node.js
npx serve website

# Using PHP
cd website
php -S localhost:8080
```

Then visit `http://localhost:8080` in your browser.

## 🎨 Customization

### Modify Color Scheme
Edit CSS variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #6366f1;     /* Primary color */
    --secondary-color: #10b981;   /* Secondary color */
    --accent-color: #f59e0b;      /* Accent color */
    /* ... */
}
```

### Update Content
Directly edit the corresponding sections in `index.html`.

### Add New Features
Add custom JavaScript logic in `script.js`.

### Update Translations
Edit translation keys in `i18n.js` for both Chinese and English.

## 📊 Performance Optimizations

The website includes the following optimizations:

- ✅ Image lazy loading
- ✅ Smooth scrolling
- ✅ Optimized CSS animations
- ✅ Responsive images
- ✅ Minimal external dependencies
- ✅ Code block copy functionality
- ✅ Intersection Observer for scroll animations

## 🌐 Deployment Recommendations

### GitHub Pages
1. Copy the contents of the `website` directory to the repository root or `docs` folder
2. Enable GitHub Pages in repository settings
3. Select the corresponding branch and folder

### Vercel/Netlify
1. Connect directly to the GitHub repository
2. Set build directory to `website`
3. One-click deployment

### Custom Server
```bash
# Using Nginx
server {
    listen 80;
    server_name cortex-mem.example.com;
    root /path/to/website;
    index index.html;
}
```

## 📝 Content Sources

Website content is based on the following project documentation:
- `README.md` - Main project documentation
- `litho.docs/1.Overview.md` - System overview
- `litho.docs/2.Architecture.md` - Architecture design
- `assets/benchmark/` - Performance test data
- `assets/snapshots/insights/` - Dashboard screenshots

## 🔗 Related Links

- [GitHub Repository](https://github.com/sopaco/cortex-mem)
- [Full Documentation](https://github.com/sopaco/cortex-mem/tree/main/litho.docs)
- [Example Projects](https://github.com/sopaco/cortex-mem/tree/main/examples)

## 📄 License

This website uses the same MIT License as the Cortex Memory project.

---

**Made with ❤️ for the Cortex Memory community**
