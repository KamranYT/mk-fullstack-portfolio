# 🚀 MK Portfolio - Modern Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features an AI-powered chat assistant, contact form, and beautiful animations.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-0055FF?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout**: Works perfectly on all devices
- **Dark/Light Mode**: Automatic theme switching with system preference
- **Smooth Animations**: Powered by Framer Motion
- **Professional UI**: Clean, modern design with Tailwind CSS

### 🤖 **AI Chat Assistant**
- **Portfolio Knowledge**: Answers questions about skills, projects, and experience
- **Real-time Chat**: Interactive chat widget with typing indicators
- **Groq Integration**: Powered by Groq's Llama3-70b model
- **Contextual Responses**: Uses portfolio data for personalized answers

### 📧 **Contact System**
- **Email Integration**: Gmail SMTP with nodemailer
- **Form Validation**: Client and server-side validation
- **Professional Templates**: Beautiful HTML email templates
- **WhatsApp Integration**: Direct WhatsApp contact link

### 📱 **Interactive Components**
- **Animated Navigation**: Smooth page transitions
- **Project Showcase**: Detailed project cards with links
- **Skills Section**: Categorized skills with visual cards
- **Blog System**: Ready for blog posts and articles

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **React Icons**: Additional icon sets

### **Backend & APIs**
- **Next.js API Routes**: Server-side API endpoints
- **Nodemailer**: Email sending functionality
- **Groq API**: AI chat integration
- **Environment Variables**: Secure configuration

### **Development Tools**
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Gmail account (for email functionality)
- Groq API key (for chat functionality)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GMAIL_APP_PASSWORD=your_16_character_gmail_app_password
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/          # AI chat endpoint
│   │   │   └── send-email/    # Contact form endpoint
│   │   ├── components/        # Reusable components
│   │   │   ├── ChatWidget.tsx # AI chat interface
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   └── ...
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects page
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Shared components
│   └── lib/                   # Utility functions
├── public/
│   ├── portfolio.json         # Portfolio data
│   └── ...
├── .env.local                 # Environment variables
└── README.md
```

## 🔧 Configuration

### **Gmail Setup (for Contact Form)**
1. Enable 2-Step Verification on your Google Account
2. Generate an App Password for "Mail"
3. Add the 16-character password to `.env.local`

### **Groq API Setup (for Chat)**
1. Sign up at [console.groq.com](https://console.groq.com)
2. Generate an API key
3. Add the key to `.env.local`

### **Portfolio Data**
Update `public/portfolio.json` with your information:
```json
{
  "name": "Your Name",
  "about": "Your description",
  "skills": ["React", "Next.js", "TypeScript"],
  "projects": [...],
  "contact": {...}
}
```

## 🎯 Key Features Explained

### **AI Chat Assistant**
- **Location**: `src/app/components/ChatWidget.tsx`
- **API**: `src/app/api/chat/route.ts`
- **Data Source**: `public/portfolio.json`
- **Features**: Real-time responses, typing indicators, error handling

### **Contact Form**
- **Location**: `src/app/contact/page.tsx`
- **API**: `src/app/api/send-email/route.ts`
- **Features**: Email validation, HTML templates, WhatsApp integration

### **Responsive Design**
- **Mobile-first approach**
- **Breakpoints**: sm, md, lg, xl
- **Touch-friendly interactions**
- **Optimized for all screen sizes**

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms**
- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment with environment variables
- **DigitalOcean**: App Platform deployment

## 📝 Customization

### **Styling**
- **Colors**: Update `tailwind.config.ts`
- **Fonts**: Modify `src/app/layout.tsx`
- **Components**: Edit individual component files

### **Content**
- **Portfolio Data**: Update `public/portfolio.json`
- **Pages**: Modify page components in `src/app/`
- **Blog**: Add markdown files in `src/app/blog/`

### **Features**
- **Add new pages**: Create new directories in `src/app/`
- **Custom APIs**: Add new routes in `src/app/api/`
- **Components**: Create reusable components in `src/components/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Groq**: For AI chat capabilities
- **Lucide**: For beautiful icons

## 📞 Contact

- **Email**: mk7275374@gmail.com
- **LinkedIn**: [Muhammad Kamran](https://www.linkedin.com/in/muhammad-kamran-916b752b4/)
- **GitHub**: [KamranYT](https://github.com/KamranYT)
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

---

⭐ **Star this repository if you found it helpful!**
