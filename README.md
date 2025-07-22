# UzOPay Website

A modern, responsive fintech website built with React and TypeScript, featuring a sleek dark theme with purple/blue accents and futuristic AI banking interface.

## 🚀 Features

- **Pixel-Perfect Design**: Matches the provided design exactly with precise spacing, colors, and typography
- **Responsive Layout**: Optimized for mobile, tablet, and desktop screens
- **Modern Animations**: Smooth transitions and hover effects using GSAP and Framer Motion
- **Interactive Elements**: Hover states, button animations, and floating labels
- **Cross-Browser Compatible**: Works on Chrome, Firefox, Edge, and Safari
- **TypeScript**: Full type safety and better development experience

## 🎨 Design Elements

- **Dark Theme**: Deep blue-black background (#0A0A1A) with subtle geometric patterns
- **Color Palette**: Purple (#8b5cf6) and blue (#6366f1) accents with white text
- **Typography**: Inter font family for modern, clean appearance
- **Robot Illustration**: Animated AI head with glowing eyes and rotating core
- **Floating Labels**: Interactive elements around the robot illustration
- **Gradient Buttons**: Primary and secondary call-to-action buttons
- **Quick Start Card**: SDK sections with active states and flow indicators

## 🛠️ Technologies Used

- **React 19** with TypeScript
- **GSAP** for advanced animations
- **Framer Motion** for smooth transitions
- **Lucide React** for icons
- **CSS3** with modern features (backdrop-filter, gradients, animations)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uzopay-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation bar with logo and menu
│   ├── HeroSection.tsx     # Main hero section with robot illustration
│   ├── MidSection.tsx      # Secondary content section
│   └── QuickStartCard.tsx  # SDK quick start card
├── App.tsx                 # Main application component
├── App.css                 # Comprehensive styling
└── index.css              # Global styles and font imports
```

## 🎯 Key Components

### Header
- Fixed navigation bar with backdrop blur effect
- UzOPay logo with gradient border
- Navigation links with active states
- Dropdown indicator for "Ai Banking"

### Hero Section
- Main headline: "End-to-End Payout & Payroll Solutions for Digital Era"
- Call-to-action buttons with hover effects
- Animated robot illustration with glowing eyes
- Floating labels for key features

### Mid Section
- Secondary content with "Simplify the payments process"
- Animated line graph showing growth/efficiency
- Consistent styling with hero section

### Quick Start Card
- SDK sections with active states
- Programming languages placeholder
- Flow indicators connecting sections
- Glassmorphism design with backdrop blur

## 🎨 Styling Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Consistent color management
- **Animations**: Keyframe animations for floating elements
- **Responsive Design**: Mobile-first approach with breakpoints
- **Glassmorphism**: Backdrop blur effects for modern UI
- **Gradients**: Linear and radial gradients for depth

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

- TypeScript for type safety
- Functional components with hooks
- CSS modules for component styling
- Consistent naming conventions

## 🐛 Known Issues

- Backdrop-filter may not work in older browsers (Safari 9+ supported)
- Some animations may be reduced on devices with `prefers-reduced-motion`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created as a senior UI developer task implementation.

---

**Note**: This is a pixel-perfect recreation of the provided design with modern React best practices and responsive design principles.
