# 🎭 Troll Website Template

A customizable template inspired by the classic "You are an Idiot!" website. This template allows you to easily create your own troll website by simply replacing the media files and customizing the configuration.

## 🚀 Features

### Core Template Features
- **Video/Image Display** - Full-screen video with fallback image support
- **Audio Integration** - Background audio that loops automatically
- **Rainbow Background** - Animated gradient background
- **Custom Cursor** - Red pulsing cursor that replaces the default mouse cursor
- **Responsive Design** - Works on desktop and mobile devices

### Troll Features (Configurable)
- **Popup Windows** - Random popups that spawn more popups when clicked
- **Floating Text** - Random text that appears and floats around the screen
- **Browser Manipulation** - Prevents right-click, keyboard shortcuts, and page leaving
- **System Alerts** - Random browser alerts claiming prizes
- **Audio Triggers** - Random audio playback at intervals

## 🎯 How to Customize

### 1. Replace Media Files
Simply replace these files with your own:

```
your-video.mp4    → Your video file (MP4 format recommended)
your-audio.mp3    → Your audio file (MP3 format recommended)
your-image.png    → Your fallback image (PNG/JPG format)
```

### 2. Customize Text Content
Edit the HTML file to change:
- **Page title** - Change `<title>🎭 Troll Website Template</title>`
- **Text overlay** - Modify the content in the `text-overlay` div
- **Meta descriptions** - Update the meta tags for social sharing

### 3. Configure Behavior
Edit `troll.js` to customize the experience:

```javascript
const CONFIG = {
    // Enable/disable features
    enableAudio: true,
    enablePopups: true,
    enableFloatingText: true,
    enableCustomCursor: true,
    
    // Customize messages
    popupMessages: [
        "🎉 YOU WON! 🎉",
        "💰 FREE MONEY! 💰",
        // Add your own messages here
    ],
    
    // Adjust timing
    popupFrequency: 5000, // milliseconds
    floatingTextFrequency: 3000, // milliseconds
};
```

### 4. Customize Styling
Edit `styles.css` to change:
- **Colors** - Modify the rainbow gradient colors
- **Animations** - Adjust animation speeds and effects
- **Layout** - Change positioning and sizing
- **Text overlay** - Uncomment the line to show text overlay

## 📁 File Structure

```
troll-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── troll.js           # JavaScript functionality
├── your-video.mp4     # Your video file (replace)
├── your-audio.mp3     # Your audio file (replace)
├── your-image.png     # Your fallback image (replace)
└── README.md          # This file
```

## 🎨 Quick Customization Examples

### Change to "You are an Idiot!" Style
1. Replace `your-video.mp4` with the classic "You are an Idiot!" video
2. Replace `your-audio.mp3` with the classic audio
3. Change the title to "You are an Idiot!"
4. Set `showTextOverlay: false` in the config

### Create a "Never Lose" Style
1. Use a different video/audio combination
2. Change popup messages to "NEVER LOSE!" style
3. Adjust colors to match your theme
4. Enable text overlay with custom message

### Make it Less Annoying
1. Set `enablePopups: false`
2. Set `enableFloatingText: false`
3. Set `preventRightClick: false`
4. Reduce `popupFrequency` and `floatingTextFrequency`

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No external dependencies
- **Modern browser features** - Uses Web Audio API, CSS animations
- **Cross-browser compatible** - Works in Chrome, Firefox, Safari, Edge
- **Mobile responsive** - Adapts to different screen sizes
- **Easy customization** - Simple configuration object

## ⚠️ Important Notes

1. **Audio Autoplay**: Modern browsers require user interaction before playing audio. The template handles this automatically.

2. **Video Format**: Use MP4 format for best compatibility across browsers.

3. **File Sizes**: Keep video and audio files reasonably sized for faster loading.

4. **Responsible Use**: Only use this template with consent and for entertainment purposes.

## 🎭 Usage Examples

### Basic Setup
1. Replace the media files with your own
2. Open `index.html` in a web browser
3. The website will automatically start playing your video and audio

### Advanced Customization
1. Edit the `CONFIG` object in `troll.js`
2. Modify the CSS animations in `styles.css`
3. Add your own custom messages and behaviors
4. Test on different devices and browsers

## 📝 Legal Notice

This template is for educational and entertainment purposes only. It does not:
- Download viruses or malware
- Steal personal information
- Cause actual harm to computers
- Violate any laws (when used responsibly)

Use responsibly and with consent!
