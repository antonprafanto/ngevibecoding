# 🚀 Panduan Deployment Vibe Coding ke GitHub Pages

Panduan lengkap untuk deploy situs Vibe Coding ke GitHub Pages dalam 10 langkah mudah.

## 📋 Prerequisites

- ✅ Akun GitHub aktif
- ✅ Git terinstall di komputer
- ✅ Node.js 18+ terinstall
- ✅ Project Vibe Coding sudah di-download/clone

## 🎯 10 Langkah Deploy ke GitHub Pages

### Step 1: Persiapan Repository GitHub

1. **Login ke GitHub.com**
2. **Buat repository baru:**
   - Repository name: `vibe-coding-site` (atau nama lain)
   - Visibility: Public (untuk GitHub Pages gratis)
   - ❌ **Jangan** centang "Add a README file"
3. **Copy URL repository**, contoh: `https://github.com/username/vibe-coding-site.git`

### Step 2: Setup Git di Project Local

```bash
# Masuk ke folder project
cd vibe-coding-site

# Initialize git (jika belum)
git init

# Add all files
git add .

# Commit pertama
git commit -m "Initial commit: Vibe Coding site setup"

# Add remote origin
git remote add origin https://github.com/antonprafanto/ngevibecoding.git

# Push ke GitHub
git push -u origin main
```

### Step 3: Update Konfigurasi untuk GitHub Pages

Edit file `astro.config.mjs`:

```js
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://antonprafanto.github.io',  // ✅ Sudah dikonfigurasi
  base: '/ngevibecoding',                   // ✅ Sudah dikonfigurasi
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Step 4: Update robots.txt

Edit file `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://antonprafanto.github.io/ngevibecoding/sitemap-index.xml
```

### Step 5: Test Build Local

```bash
# Test build untuk memastikan tidak ada error
npm run build

# Preview hasil build (optional)
npm run preview
```

Jika berhasil, Anda akan melihat:
```
✓ Completed in 1.87s
[build] Complete!
```

### Step 6: Commit dan Push Perubahan

```bash
# Add changes
git add .

# Commit perubahan konfigurasi
git commit -m "Update config for GitHub Pages deployment"

# Push ke GitHub
git push origin main
```

### Step 7: Enable GitHub Pages

1. **Buka repository** di GitHub.com
2. **Go to Settings** tab
3. **Scroll ke bagian "Pages"** di sidebar kiri
4. **Source**: Pilih "GitHub Actions"
5. **Save** (jika ada tombol save)

### Step 8: Tunggu GitHub Actions Build

1. **Go to "Actions" tab** di repository
2. **Lihat workflow "Deploy Astro to GitHub Pages"**
3. **Tunggu sampai selesai** (biasanya 2-5 menit)
4. **Pastikan ada ✅ hijau** yang menandakan sukses

### Step 9: Akses Situs yang Sudah Live

Buka browser dan akses:
```
https://antonprafanto.github.io/ngevibecoding
```

✅ **URL Sudah Ready:**
- Username: `antonprafanto`
- Repository: `ngevibecoding`
- URL: `https://antonprafanto.github.io/ngevibecoding`

### Step 10: Verifikasi Semua Fitur Berjalan

✅ **Checklist Verifikasi:**
- [ ] Homepage load dengan benar
- [ ] Hero section tampil bagus
- [ ] Semua 6 modul card muncul
- [ ] Link ke `/modules` berfungsi
- [ ] Individual modul pages bisa diakses
- [ ] Navigation antar modul bekerja
- [ ] Dark mode toggle berfungsi
- [ ] Mobile responsive
- [ ] Sitemap accessible: `/sitemap-index.xml`

## 🔧 Troubleshooting

### Issue: 404 Page Not Found

**Solusi:**
1. Pastikan `base` di `astro.config.mjs` sesuai nama repository
2. Wait 5-10 menit setelah push untuk propagasi
3. Check GitHub Actions tidak ada error

### Issue: CSS/Styling Tidak Muncul

**Solusi:**
1. Pastikan `site` dan `base` di config sudah benar
2. Clear browser cache (Ctrl+F5)
3. Check GitHub Actions log untuk error

### Issue: GitHub Actions Failed

**Solusi:**
1. Check log error di Actions tab
2. Pastikan `package.json` dependencies complete
3. Re-run workflow jika perlu

### Issue: Images Tidak Load

**Solusi:**
1. Pastikan gambar ada di folder `public/`
2. Update path gambar di code jika perlu
3. Check case-sensitive naming

## 🎨 Custom Domain (Optional)

Jika Anda punya custom domain:

### Step 1: Update Config
```js
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/', // Remove base untuk custom domain
  // ...
});
```

### Step 2: Add CNAME File
```bash
echo "yourdomain.com" > public/CNAME
```

### Step 3: Update DNS
Di DNS provider, add CNAME record:
```
CNAME: www.yourdomain.com → your-username.github.io
```

## 📊 Monitoring & Analytics

### Google Analytics Setup

1. **Buat Google Analytics account**
2. **Get tracking ID** (G-XXXXXXXXXX)
3. **Add ke `BaseLayout.astro`:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Performance Monitoring

Gunakan tools berikut untuk monitoring:
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse** (built-in di Chrome DevTools)

Target metrics:
- Performance: ≥95
- SEO: ≥95  
- Accessibility: ≥95
- Best Practices: ≥95

## 🔄 Update Content Workflow

Untuk update konten di masa depan:

```bash
# 1. Edit file markdown di src/content/modules/
# 2. Test local
npm run dev

# 3. Build test
npm run build

# 4. Commit dan push
git add .
git commit -m "Update: [describe your changes]"
git push origin main

# 5. GitHub Actions akan auto-deploy
```

## 🎉 Selamat!

Situs Vibe Coding Anda sudah live di internet! 🚀

**Next Steps:**
1. **Share URL** ke teman dan social media
2. **Monitor performance** dengan analytics
3. **Update content** secara berkala
4. **Gather feedback** dari users
5. **Iterate dan improve** berdasarkan data

**Pro Tips:**
- 📱 Test di berbagai device dan browser
- 🔍 Submit ke Google Search Console untuk SEO
- 📊 Setup Google Analytics untuk tracking
- 🔗 Share di LinkedIn, Twitter, dan komunitas coding
- 💬 Join Discord/Telegram groups untuk feedback

---

**Need Help?**
- 📧 Email: support@vibecoding.com
- 💬 GitHub Issues: Create issue di repository
- 🗨️ Community: Join Discord server kami

**Happy Coding! 🎯**