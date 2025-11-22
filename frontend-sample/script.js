console.log('Frontend loaded successfully');

// Check if backend image loaded as background
const body = document.getElementById('main-body');
const backendImageUrl = 'http://192.168.49.2:30001/image';

// Test if backend is accessible
fetch(backendImageUrl)
    .then(response => {
        if (response.ok) {
            console.log('✓ Background image loaded from backend successfully!');
        } else {
            console.log('✗ Failed to load background from backend');
        }
    })
    .catch(error => {
        console.log('✗ Backend not available:', error);
    });

// Change theme button - now changes overlay opacity
document.getElementById('colorBtn').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const currentOpacity = window.getComputedStyle(container).backgroundColor;
    
    // Toggle between different opacity levels
    if (currentOpacity.includes('0.95')) {
        container.style.background = 'rgba(255, 255, 255, 0.85)';
        document.getElementById('status').textContent = 'More transparent!';
    } else if (currentOpacity.includes('0.85')) {
        container.style.background = 'rgba(255, 255, 255, 0.7)';
        document.getElementById('status').textContent = 'Even more transparent!';
    } else {
        container.style.background = 'rgba(255, 255, 255, 0.95)';
        document.getElementById('status').textContent = 'Back to normal!';
    }
    
    setTimeout(() => {
        document.getElementById('status').textContent = '';
    }, 2000);
});