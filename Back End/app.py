from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app) 

UPLOAD_FOLDER = 'gifs'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/uploads', methods=['POST'])
def upload_gif():
    file = request.files.get('gif')
    if file and file.filename != '':
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        return jsonify({"message": f"File '{filename}' uploaded successfully!"}), 200
    else:
        return jsonify({"error": "No file uploaded or file type not allowed"}), 400

if __name__ == '__main__':
    app.run(debug=True)