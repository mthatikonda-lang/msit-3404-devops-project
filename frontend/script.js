// Backend URL - change based on your environment
const BACKEND_URL = 'http://192.168.1.58:5000';

console.log('Frontend application loaded');
console.log('Backend URL:', BACKEND_URL);

// Load image as background
function loadBackendImageAsBackground() {
    const backgroundDiv = document.getElementById('background-image');
    const imageUrl = `${BACKEND_URL}/image`;
    
    console.log('Loading image from:', imageUrl);
    
    // Set the background image
    backgroundDiv.style.backgroundImage = `url('${imageUrl}')`;
    
    // Test if image loads
    const testImg = new Image();
    testImg.onload = function() {
        console.log('✅ Background image loaded successfully from backend');
    };
    testImg.onerror = function() {
        console.error('❌ Failed to load background image from backend');
        // Fallback to gradient background
        backgroundDiv.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    };
    testImg.src = imageUrl;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing frontend application...');
    loadBackendImageAsBackground();
});