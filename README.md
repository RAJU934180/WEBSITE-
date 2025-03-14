# RewardAlts - Minecraft Account Generator

## 🚀 Overview
RewardAlts is a **modern, minimalistic** Minecraft account generator website with a **BlueAlts-style sliding navigation menu**. The "Generate" button redirects users to a **random shortened link** for monetization.

## 🎨 Features
- ✅ **Slide-in Hamburger Menu** (like BlueAlts)
- ✅ **Home, Support, and Discord Links**
- ✅ **"Generate" Button Redirects to a Random Shortened Link**
- ✅ **Fully Responsive & Mobile-Friendly**
- ✅ **Customizable UI with HTML, CSS & JavaScript**

## 📂 File Structure
```
RewardAlts/
│── index.html          # Homepage
│── support.html        # Support Page
│── styles.css          # Main styles
│── script.js           # JavaScript for menu & link redirection
│── creeper-logo.png    # Logo (replace with your own)
│── README.md           # Documentation
```

## 🔧 Setup Instructions
1. **Download the files** and place them in a folder.
2. **Replace `creeper-logo.png`** with your own **logo**.
3. **Update Discord Link**  
   In `index.html`, replace:
   ```html
   <a href="https://discord.gg/YOUR_DISCORD_LINK" target="_blank">Discord</a>
   ```
   with your actual **Discord invite link**.

4. **Customize Shortened Links**  
   In `script.js`, replace:
   ```js
   const links = [
       "https://linkpays.in/w8JvUD",
       "https://linkpays.in/w8JvUD",
       ...
   ];
   ```
   with **your own monetized links**.

5. **Test the site**  
   Open `index.html` in a browser to see the site in action!

## 🎯 How It Works
- **Clicking ☰ (menu icon)** → Opens a slide-in navigation menu.
- **Clicking "Generate"** → Redirects to a **random shortened link**.
- **Clicking "Home"** → Redirects to `index.html`.
- **Clicking "Support"** → Opens `support.html` with contact details.
- **Clicking "Discord"** → Opens the Discord server in a new tab.

## 📌 Notes
- The design is **inspired by BlueAlts** but is **fully customizable**.
- You can **change colors, fonts, and layout** in `styles.css`.
- Hosting options: **GitHub Pages, Netlify, or Vercel**.

## 👥 Credits
- **Developer:** *ADARSH*  
- **Inspired by:** BlueAlts  
- **Logo:** *Creeper image (replaceable)*  

## 📞 Support
If you need help, contact us at **grow9341@gmail.com**.
