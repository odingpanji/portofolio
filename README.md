# Automation Engineer & Industrial Software Developer Portfolio

A modern, professional, and interactive web portfolio built with Next.js, Tailwind CSS, and Framer Motion. 
Designed specifically for Automation Engineers showcasing skills in PLC, SCADA, IoT, and Software Engineering.

## 🚀 Features

- **Modern Industrial Design**: Dark mode dominant with cyan/blue neon accents and glassmorphism.
- **Interactive UI**: Custom cursor, smooth scroll, scroll progress indicator, and hover animations.
- **Component-Driven**: Built with reusable React components (Hero, About, Skills, Projects, Architecture, Experience, Contact).
- **Fully Responsive**: Mobile, tablet, and desktop optimized.
- **SEO Optimized**: Pre-configured metadata and semantic HTML structure.

## 💻 Tech Stack

- **Framework**: [Next.js 16+ (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd web_portofolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment Guide (Vercel)

Website ini sangat disarankan untuk di-deploy menggunakan **Vercel** karena Next.js adalah framework buatan Vercel, sehingga prosesnya gratis, sangat mudah, dan otomatis.

### Langkah 1: Push ke GitHub
1. Buat repository baru di GitHub (misal: `portfolio-automation`).
2. Push *source code* lokal Anda ke repository GitHub tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portfolio-automation.git
   git push -u origin main
   ```

### Langkah 2: Deploy di Vercel
1. Buka [Vercel](https://vercel.com/) dan login menggunakan akun GitHub Anda.
2. Di dashboard Vercel, klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository `portfolio-automation` Anda dari daftar GitHub yang muncul, lalu klik **"Import"**.
4. Biarkan semua konfigurasi *Framework Preset*, *Build Command*, dan *Output Directory* secara default (Vercel otomatis mendeteksi konfigurasi Next.js).
5. Klik **"Deploy"**.

### Langkah 3: Selesai!
- Tunggu proses build selama kurang lebih 1-2 menit.
- Setelah selesai, Anda akan mendapatkan URL publik gratis seperti: `https://portfolio-automation.vercel.app`
- URL ini siap Anda bagikan ke recruiter, klien, atau dicantumkan di CV/LinkedIn Anda.

---

*Engineered with ⚡ by an Automation Engineer.*
