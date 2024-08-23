from PIL import Image, ImageSequence
from reportlab.pdfgen import canvas
from reportlab.lib.units import cm
from reportlab.lib.pagesizes import A4
import os

GIF_FOLDER = 'gifs'
PDF_FOLDER = 'pdfs'

def convert_gif_to_pdf(gif_path, pdf_path):
    gif = Image.open(gif_path)
    c = canvas.Canvas(pdf_path, pagesize=A4)
    
    left_margin = 0 * cm
    spacing = 0.05 * cm
    page_width = A4[0]
    y_position = A4[1]

    for i, frame in enumerate(ImageSequence.Iterator(gif)):
        frame = frame.convert('RGB')
        width, height = frame.size

        temp_image_path = os.path.join(GIF_FOLDER, f"temp_frame_{i}.png")
        frame.save(temp_image_path)

        x_position = page_width - width

        # Draw border
        c.setDash(1, 2)
        c.setStrokeColorRGB(0, 0, 0)
        c.setLineWidth(1)
        c.rect(left_margin, y_position - height - (2 * spacing), page_width, height, stroke=1, fill=0)

        # Draw image
        c.drawImage(temp_image_path, x_position, y_position - height - (2 * spacing), width=width, height=height)

        # Draw number
        number_position_x = left_margin + 0.5 * cm
        number_position_y = y_position - height / 2 - (2 * spacing)
        c.setFont("Helvetica", 20)
        c.drawString(number_position_x, number_position_y, str(i + 1))

        # Update y_position
        y_position -= (height + 4 * spacing)

        if y_position - height - (2 * spacing) < 0:
            c.showPage()
            y_position = A4[1]

        os.remove(temp_image_path)

    c.save()
