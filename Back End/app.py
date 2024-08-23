from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from convert_gif_to_pdf import convert_gif_to_pdf

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'gifs'
PDF_FOLDER = 'pdfs'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/uploads', methods=['POST'])
def upload_gif():
    file = request.files.get('gif')
    if file and file.filename != '':
        filename = secure_filename(file.filename)
        gif_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        pdf_path = os.path.join(PDF_FOLDER, filename.rsplit('.', 1)[0] + '.pdf')

        # Save the GIF
        file.save(gif_path)

        # Convert the GIF to PDF
        try:
            convert_gif_to_pdf(gif_path, pdf_path)
            return jsonify({"message": f"File '{filename}' uploaded and processed successfully!", "pdf_path": pdf_path}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "No file uploaded or file type not allowed"}), 400

@app.route('/pdf/<filename>', methods=['GET'])
def get_pdf(filename):
    pdf_path = os.path.join(PDF_FOLDER, filename)
    if os.path.exists(pdf_path):
        return send_file(pdf_path, mimetype='application/pdf', as_attachment=True, download_name=filename)
    else:
        return jsonify({"error": "PDF file not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
