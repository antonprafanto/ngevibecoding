# Vibe Coding - Belajar Coding dengan AI

Platform pembelajaran coding untuk pemula dengan bantuan AI. Dari nol sampai bisa publish aplikasi ke GitHub Pages tanpa hafal syntax.

![Vibe Coding](https://img.shields.io/badge/Astro-5.13.0-orange?style=flat-square&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.12-blue?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🌟 Features

- **AI-Powered Learning**: Belajar coding dengan bantuan AI sebagai co-creator
- **Hands-on Projects**: 90% praktik langsung, 10% teori
- **Progressive Learning**: 6 modul dari foundation sampai monetization  
- **Mobile Responsive**: Optimized untuk semua device
- **Dark Mode**: Support tema gelap untuk kenyamanan
- **SEO Optimized**: Meta tags dan sitemap untuk discoverability

## 📚 Course Structure

### Modul 1: Foundations & Mindset
**Durasi**: 3-4 jam | **Level**: Complete Beginner
Mengubah mindset dari consumer ke builder dengan bantuan AI.

### Modul 2: Prompting & AI Collaboration  
**Durasi**: 2 jam | **Level**: Beginner
Advanced techniques untuk berkomunikasi dengan AI dalam development.

### Modul 3: Building the Product
**Durasi**: 2 jam | **Level**: Intermediate  
Hands-on building aplikasi full-stack dengan Next.js dan Supabase.

### Modul 4: Infrastructure & Security
**Durasi**: ± 2 jam | **Level**: Intermediate
Proteksi dan optimisasi aplikasi dengan pendekatan awam-friendly.

### Modul 5: Optimization & Tracking
**Durasi**: ± 2.5 jam | **Level**: Intermediate
Analytics, performance optimization, dan business intelligence.

### Modul 6: Monetization & Growth
**Durasi**: ± 3 jam | **Level**: Advanced
Transform aplikasi menjadi revenue stream yang sustainable.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn
- Git

### Development Setup

1. **Clone repository**
   ```bash
   git clone https://github.com/antonprafanto/ngevibecoding.git
   cd ngevibecoding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:4321/ngevibecoding
   ```

### Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for issues
npm run astro check
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Fork repository ini**

2. **Konfigurasi sudah ready**
   File `astro.config.mjs` sudah dikonfigurasi untuk:
   ```js
   export default defineConfig({
     site: 'https://antonprafanto.github.io',
     base: '/ngevibecoding',
     // ...
   });
   ```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Push ke main branch

4. **Akses situs**
   ```
   https://antonprafanto.github.io/ngevibecoding
   ```

### Custom Domain

1. **Update astro.config.mjs**
   ```js
   export default defineConfig({
     site: 'https://yourdomain.com',
     base: '/', // Remove base for custom domain
     // ...
   });
   ```

2. **Add CNAME file**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

## 🏗️ Project Structure

```
vibe-coding-site/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ModuleCard.astro
│   │   └── ui/            # UI components
│   │       ├── TOC.astro
│   │       ├── Callout.astro
│   │       └── Steps.astro
│   ├── content/           # Markdown content
│   │   ├── config.ts      # Content collections config
│   │   └── modules/       # Course modules
│   │       ├── module-1-foundations.md
│   │       ├── module-2-prompting.md
│   │       └── ...
│   ├── layouts/           # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── ModuleLayout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro    # Homepage
│   │   └── modules/       
│   │       ├── index.astro      # All modules
│   │       └── [slug].astro     # Individual module
│   └── styles/
│       └── global.css
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Colors & Themes

Update theme colors di `tailwind.config.cjs`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          // ...
        }
      }
    }
  }
}
```

### Typography

Font configuration ada di `BaseLayout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
```

### Content Styling

Custom prose styles untuk content ada di `BaseLayout.astro` dalam tag `<style is:global>`.

## 🔧 Configuration

### Site Metadata

Update informasi situs di `astro.config.mjs` dan `BaseLayout.astro`:

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

```astro
<!-- BaseLayout.astro -->
const { title, description = "Your site description" } = Astro.props;
```

### Content Collections

Konfigurasi content ada di `src/content/config.ts`:

```ts
const modulesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    duration: z.string(),
    level: z.string(),
    summary: z.string(),
  }),
});
```

## 📊 Analytics & SEO

### Google Analytics

Tambahkan Google Analytics ID di `BaseLayout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Features

- ✅ Automatic sitemap generation
- ✅ OpenGraph meta tags
- ✅ Twitter Cards
- ✅ Structured data
- ✅ robots.txt

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 Content Guidelines

### Adding New Modules

1. **Create markdown file** di `src/content/modules/`
2. **Add frontmatter**:
   ```yaml
   ---
   title: "Modul X: Your Title"
   order: X
   duration: "± X jam"
   level: "Beginner|Intermediate|Advanced"
   summary: "Brief description"
   publishDate: 2024-08-14
   ---
   ```
3. **Write content** menggunakan Markdown
4. **Update navigation** jika diperlukan

### Content Style Guide

- **Tone**: Conversational, friendly, encouraging
- **Language**: Bahasa Indonesia yang natural
- **Structure**: H2 untuk sections, H3 untuk subsections
- **Examples**: Practical, relevant, tested
- **Call-outs**: Gunakan komponen Callout untuk tips

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Content**: [Markdown](https://www.markdownguide.org/) - Content authoring
- **Deployment**: [GitHub Pages](https://pages.github.com/) - Free hosting
- **Icons**: [Heroicons](https://heroicons.com/) - SVG icons

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro Team](https://astro.build/) untuk amazing static site generator
- [Tailwind CSS](https://tailwindcss.com/) untuk utility-first CSS framework
- [Heroicons](https://heroicons.com/) untuk beautiful SVG icons
- Community yang support open source education

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/username/vibe-coding-site/issues)
- **Discussions**: [GitHub Discussions](https://github.com/username/vibe-coding-site/discussions)
- **Email**: contact@vibecoding.com

---

**Made with ❤️ by the Vibe Coding community**

*Building the future, one learner at a time.*