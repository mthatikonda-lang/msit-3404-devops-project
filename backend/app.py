from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend to access backend

@app.route('/api/status')
def status():
    return jsonify({
        'status': 'healthy',
        'service': 'backend',
        'message': 'Backend API is running successfully!'
    })

@app.route('/api/data')
def get_data():
    return jsonify({
        'title': 'MSIT 3404 DevOps Project',
        'description': 'Flask Backend API',
        'features': [
            'RESTful API',
            'Docker Containerized',
            'Kubernetes Ready',
            'Connected to Frontend'
        ]
    })

@app.route('/api/image')
def get_image():
    # Serve the image file
    return send_from_directory('static', 'image.jpg')

@app.route('/health')
def health():
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)