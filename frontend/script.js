// Configuration - Update this with your backend URL
// For local testing: http://localhost:5000
// For Kubernetes: http://<minikube-ip>:30001 or service name
const BACKEND_URL = 'http://localhost:5000';

console.log('Frontend application loaded');

// Check backend status
async function checkBackendStatus() {
    const statusDiv = document.getElementById('backend-status');
    
    try {
        const response = await fetch(`${BACKEND_URL}/api/status`);
        const data = await response.json();
        
        statusDiv.className = 'status-box success';
        statusDiv.innerHTML = `
            <h3>✅ ${data.message}</h3>
            <p><strong>Status:</strong> ${data.status}</p>
            <p><strong>Service:</strong> ${data.service}</p>
        `;
    } catch (error) {
        statusDiv.className = 'status-box error';
        statusDiv.innerHTML = `
            <h3>❌ Backend Connection Failed</h3>
            <p>${error.message}</p>
            <p><small>Make sure backend is running on ${BACKEND_URL}</small></p>
        `;
        console.error('Backend error:', error);
    }
}

// Fetch data from backend
async function fetchBackendData() {
    const dataDiv = document.getElementById('backend-data');
    
    try {
        const response = await fetch(`${BACKEND_URL}/api/data`);
        const data = await response.json();
        
        dataDiv.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <h4>Features:</h4>
            <ul>
                ${data.features.map(feature => `<li>✨ ${feature}</li>`).join('')}
            </ul>
        `;
    } catch (error) {
        dataDiv.innerHTML = `<p class="error">Failed to load data: ${error.message}</p>`;
        console.error('Data fetch error:', error);
    }
}

// Load image from backend
async function loadBackendImage() {
    const imageContainer = document.getElementById('image-container');
    
    try {
        const imageUrl = `${BACKEND_URL}/api/image`;
        imageContainer.innerHTML = `
            <img src="${imageUrl}" alt="DevOps Project Image" 
                 onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23ddd%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 text-anchor=%22middle%22 dy=%22.3em%22>Image not available</text></svg>';">
            <p><small>Image loaded from backend API</small></p>
        `;
    } catch (error) {
        imageContainer.innerHTML = `<p class="error">Failed to load image: ${error.message}</p>`;
        console.error('Image load error:', error);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing frontend application...');
    checkBackendStatus();
    fetchBackendData();
    loadBackendImage();
});