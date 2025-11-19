// Log when page loads
console.log('✅ Frontend is running successfully!');
console.log('📦 Built with HTML, CSS, JavaScript');
console.log('🐳 Containerized with Docker');
console.log('☸️ Deployed on Kubernetes');

// Add animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.5s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

