import os
import smtplib
import ssl

from email.message import EmailMessage
from email.utils import formataddr
from pathlib import Path
from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from jinja2 import Environment, FileSystemLoader, select_autoescape

PORT = 465
EMAIL_SERVER = "smtp.gmail.com"

# Load the environment variables
# Returns the current folder of Python file 
current_dir = Path(__file__).resolve().parent if "__file__" in locals() else Path.cwd()
envars = current_dir / ".env"
load_dotenv(envars)

# Read environment variables
sender_email = os.getenv("EMAIL")
password_email = os.getenv("PASSWORD")

context = ssl.create_default_context()

def send_email(template, subject, recipients, name):
    env = Environment(
        loader=FileSystemLoader('email_templates'),
        autoescape=select_autoescape(['html'])
    )
    template = env.get_template(template)

    with smtplib.SMTP_SSL(EMAIL_SERVER, PORT, context=context) as smtp:
        # Login with credentials
        smtp.login(sender_email, password_email)

        for recipient in recipients:
            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = recipient
            msg['Subject'] = subject

            # Render the HTML content from the template
            html_content = template.render(name=name)

            # Attach the HTML content to the email
            msg.attach(MIMEText(html_content,'html'))
            
            # Send email
            smtp.send_message(msg)
            print("Email sent")

if __name__ == "__main__":
    send_email(
        template="adobe_login.html",
        subject="You Adobe security profile has changed",
        recipients=["rebeccah.dev@gmail.com"],
        name="Rebecca Hsu"
    )