from flask import Flask, send_file
from flask_cors import CORS  # ADD THIS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Backend Service</title>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                padding: 40px;
                background-color: #f5f5f5;
            }
            .container {
                background: white;
                padding: 30px;
                border-radius: 8px;
                max-width: 800px;
            }
            h1 { 
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }
            h2 {
                color: #34495e;
                margin-top: 20px;
            }
            img { 
                border: 2px solid #3498db; 
                margin-top: 15px; 
                max-width: 400px;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Backend Service Running!</h1>
            <p>MSIT 3404 DevOps Project</p>
            <p>This Flask app serves images to the frontend.</p>
            
            <h2>Sample Image:</h2>
            <img src="/image" alt="Sample Image">
            
        </div>
    </body>
    </html>
    """

@app.route("/image")
def serve_image():
    return send_file("sample.jpg", mimetype="image/jpeg")

@app.route("/status")
def status():
    return {"message": "Backend is active", "port": 5000}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)