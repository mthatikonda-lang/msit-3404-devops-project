// Backend URL - change this based on environment
// Local testing: http://localhost:5000
// Kubernetes: http://<minikube-ip>:30001
const BACKEND_URL = 'http://localhost:5000';

console.log('Frontend application loaded');
console.log('Backend URL:', BACKEND_URL);

// Load image from backend
function loadBackendImage() {
    const img = document.getElementById('backend-image');
    const status = document.getElementById('status');
    
    console.log('Attempting to load image from:', BACKEND_URL + '/image');
    
    // Set image source from backend
    img.src = `${BACKEND_URL}/image`;
    
    // When image loads successfully
    img.onload = function() {
        img.style.display = 'block';
        status.style.display = 'none';
        console.log('✅ Image loaded successfully from backend');
    };
    
    // If image fails to load
    img.onerror = function() {
        status.textContent = '❌ Failed to load image from backend. Make sure backend is running on ' + BACKEND_URL;
        status.classList.remove('loading');
        status.classList.add('error');
        console.error('❌ Failed to load image from backend');
    };
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing frontend application...');
    loadBackendImage();
});