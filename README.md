# Marine Engineering Hub

A beautiful and modern React web application for marine engineering students, featuring video lectures and study materials.

## Features

- 🎥 **Video Lectures** - Curated YouTube video content for marine engineering topics
- 📚 **Study Materials** - Downloadable PDFs and study notes
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS
- 📱 **Responsive** - Works perfectly on all devices
- 🔍 **Search & Filter** - Easy content discovery
- ⚡ **Fast** - Built with Vite for optimal performance

## Tech Stack

- React 18
- React Router v6
- Tailwind CSS
- Vite
- Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
cd ayu
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
ayu/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Videos.jsx
│   │   └── Materials.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Customization

### Adding Videos

Edit `src/pages/Videos.jsx` and replace the `VIDEO_ID_X` placeholders with actual YouTube video IDs in the `videos` array.

### Adding Study Materials

Edit `src/pages/Materials.jsx` and implement the download functionality in the `handleDownload` function with your actual PDF links.

### Styling

The color scheme is defined in `tailwind.config.js`. You can customize colors by modifying the theme configuration:

```js
colors: {
  ocean: {
    deep: '#001219',
    mid: '#005f73',
    bright: '#0a9396',
  },
  foam: '#94d2bd',
  sand: '#e9d8a6',
  rust: '#ee9b00',
  coral: '#ca6702',
  anchor: '#bb3e03',
}
```

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Author

Created for Marine Engineering Students

---

**Note:** Replace video IDs and PDF links with your actual content before deploying to production.
