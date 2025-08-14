// Troll Website Template JavaScript
// Customize the variables below to change the behavior

// Configuration - Change these values to customize the experience
const CONFIG = {
    // Audio settings
    enableAudio: true,
    audioVolume: 0.3,
    
    // Popup settings
    enablePopups: true,
    popupFrequency: 5000, // milliseconds
    maxPopups: 10,
    
    // Floating text settings
    enableFloatingText: true,
    floatingTextFrequency: 3000, // milliseconds
    
    // Cursor settings
    enableCustomCursor: true,
    
    // Browser manipulation
    preventRightClick: true,
    preventKeyboardShortcuts: true,
    preventPageLeave: true,
    
    // Text overlay
    showTextOverlay: false, // Set to true to show the text overlay
    
    // Custom messages - Change these to your own
    popupMessages: [
        "🎉 YOU WON! 🎉",
        "💰 FREE MONEY! 💰",
        "🚗 WIN A CAR! 🚗",
        "📱 FREE PHONE! 📱",
        "💻 VIRUS DETECTED! 💻",
        "⚠️ CLICK HERE! ⚠️",
        "🎁 CLAIM PRIZE! 🎁",
        "🔥 HOT DEAL! 🔥"
    ],
    
    floatingTextMessages: [
        "YOU WON!",
        "FREE MONEY!",
        "CLICK HERE!",
        "VIRUS!",
        "DOWNLOAD NOW!",
        "PRIZE!",
        "DEAL!",
        "HOT!"
    ]
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎭 Troll Website Template Loaded!');
    
    // Initialize features based on configuration
    if (CONFIG.enableCustomCursor) initCustomCursor();
    if (CONFIG.enableAudio) initAudio();
    if (CONFIG.enablePopups) initPopups();
    if (CONFIG.enableFloatingText) initFloatingText();
    if (CONFIG.preventRightClick) preventRightClick();
    if (CONFIG.preventKeyboardShortcuts) preventKeyboardShortcuts();
    if (CONFIG.preventPageLeave) preventPageLeave();
    if (CONFIG.showTextOverlay) showTextOverlay();
    
    // Start random events
    startRandomEvents();
});

// Custom cursor functionality
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
}

// Audio functionality
function initAudio() {
    const audio = document.getElementById('troll-audio');
    if (audio) {
        audio.volume = CONFIG.audioVolume;
        
        // Try to play audio on first user interaction
        document.addEventListener('click', function playAudio() {
            audio.play().catch(e => console.log('Audio play failed:', e));
            document.removeEventListener('click', playAudio);
        }, { once: true });
        
        // Auto-play when video starts
        const video = document.getElementById('troll-video');
        if (video) {
            video.addEventListener('play', () => {
                audio.play().catch(e => console.log('Audio play failed:', e));
            });
        }
    }
}

// Popup functionality
function initPopups() {
    let popupCount = 0;
    
    function createPopup() {
        if (popupCount >= CONFIG.maxPopups) return;
        
        const message = CONFIG.popupMessages[Math.floor(Math.random() * CONFIG.popupMessages.length)];
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = message;
        popup.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        popup.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        
        // Make popup clickable to create more popups
        popup.onclick = () => {
            popup.remove();
            popupCount--;
            createPopup(); // Create a new one
        };
        
        document.body.appendChild(popup);
        popupCount++;
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (popup.parentNode) {
                popup.remove();
                popupCount--;
            }
        }, 5000);
    }
    
    // Start popup creation
    setInterval(createPopup, CONFIG.popupFrequency);
}

// Floating text functionality
function initFloatingText() {
    function createFloatingText() {
        const message = CONFIG.floatingTextMessages[Math.floor(Math.random() * CONFIG.floatingTextMessages.length)];
        const floatingText = document.createElement('div');
        floatingText.className = 'floating-element';
        floatingText.textContent = message;
        floatingText.style.left = Math.random() * window.innerWidth + 'px';
        floatingText.style.top = Math.random() * window.innerHeight + 'px';
        floatingText.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        document.body.appendChild(floatingText);
        
        setTimeout(() => {
            if (floatingText.parentNode) {
                floatingText.remove();
            }
        }, 3000);
    }
    
    setInterval(createFloatingText, CONFIG.floatingTextFrequency);
}

// Prevent right-click
function preventRightClick() {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        createRandomPopup();
    });
}

// Prevent keyboard shortcuts
function preventKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.altKey || e.metaKey) {
            e.preventDefault();
            createRandomPopup();
        }
    });
}

// Prevent page leaving
function preventPageLeave() {
    window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? You\'ll miss out on amazing deals!';
    });
}

// Show text overlay
function showTextOverlay() {
    const overlay = document.getElementById('text-overlay');
    if (overlay) {
        overlay.style.display = 'block';
    }
}

// Create a random popup
function createRandomPopup() {
    if (CONFIG.enablePopups) {
        const message = CONFIG.popupMessages[Math.floor(Math.random() * CONFIG.popupMessages.length)];
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = message;
        popup.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        popup.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        
        popup.onclick = () => popup.remove();
        document.body.appendChild(popup);
        
        setTimeout(() => {
            if (popup.parentNode) popup.remove();
        }, 3000);
    }
}

// Start random events
function startRandomEvents() {
    // Random system alerts (less frequent)
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance every 10 seconds
            alert('🎉 CONGRATULATIONS! You\'ve been selected for a FREE prize! 🎉');
        }
    }, 10000);
    
    // Random audio triggers
    setInterval(() => {
        if (Math.random() < 0.1 && CONFIG.enableAudio) { // 10% chance every 5 seconds
            const audio = document.getElementById('troll-audio');
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(e => console.log('Random audio failed:', e));
            }
        }
    }, 5000);
}

// Utility function to play annoying sound
function playAnnoyingSound() {
    if (!CONFIG.enableAudio) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Audio context failed:', e);
    }
}

// Export configuration for easy access
window.TROLL_CONFIG = CONFIG;
