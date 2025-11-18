from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Store form submissions (in real app, use database)
submissions = []

@app.route('/')
def index():
    """Display the contact form"""
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    """Handle form submission"""
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    # Store submission
    submission = {
        'name': name,
        'email': email,
        'message': message
    }
    submissions.append(submission)
    
    # Redirect to success page
    return redirect(url_for('success', name=name))

@app.route('/success')
def success():
    """Display success page"""
    name = request.args.get('name', 'User')
    return render_template('success.html', name=name)

@app.route('/submissions')
def view_submissions():
    """View all form submissions"""
    return render_template('submissions.html', submissions=submissions)

if __name__ == '__main__':
    app.run(debug=True)