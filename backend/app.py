from flask import Flask, send_from_directory, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({
        'message': 'Flask Backend API',
        'status': 'running',
        'endpoints': ['/image', '/health']
    })

@app.route('/image')
def get_image():
    return send_from_directory('static', 'image.jpg')

@app.route('/health')
def health():
    return jsonify({'status': 'healthy', 'service': 'backend'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)