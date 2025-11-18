from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Configure upload folder for images
UPLOAD_FOLDER = 'static/images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the images directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    """Main page that displays content and images"""
    # Get list of images in the static/images folder
    images = []
    if os.path.exists(UPLOAD_FOLDER):
        images = [f for f in os.listdir(UPLOAD_FOLDER) 
                  if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    
    return render_template('index.html', images=images)

@app.route('/hello')
def hello():
    """Simple hello endpoint"""
    return '<h1>Hello, World!</h1>'

@app.route('/images/<filename>')
def serve_image(filename):
    """Serve images from the upload folder"""
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)