# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Responsive design
- Single Page Application (SPA) with React Router
- Modern UI with Tailwind CSS
- YouTube video integration
- Contact form
- Resume section
- Social media links

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Configuration

1. Update your personal information in the components:
   - Update your name, job title, and bio in `Home.jsx` and `About.jsx`
   - Add your social media links in `Footer.jsx`
   - Update the resume content in `Resume.jsx`

2. For YouTube integration:
   - Replace `YOUR_CHANNEL_ID` and `YOUR_YOUTUBE_API_KEY` in `YouTube.jsx`
   - Update the YouTube channel URL in the "View More Videos" link

3. For the contact form:
   - Replace `YOUR_FORM_SUBMISSION_ENDPOINT` in `Contact.jsx` with your form submission endpoint
   - You can use services like Formspree or set up your own backend

## Deployment

This project is configured for deployment on Netlify. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for a Netlify account
3. Connect your repository to Netlify
4. Netlify will automatically detect the build settings from `netlify.toml`

## Customization

- Update colors in `tailwind.config.js` to match your brand
- Replace placeholder images with your own
- Modify the layout and styling using Tailwind CSS classes

## License

This project is licensed under the MIT License - see the LICENSE file for details.
