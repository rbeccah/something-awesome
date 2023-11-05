import json
import csv
from flask import Flask, request, jsonify
from io import StringIO
from flask_cors import CORS

import helper
import email_handler

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

# Define the path to the JSON file
json_file = 'campaigns.json'


#--------------------- Functions ---------------------#
def get_campaigns():
    # Initialize the campaigns list with existing data or an empty list
    campaigns = []

    # Load existing data from campaigns.json if it exists
    try:
        with open(json_file, 'r') as file:
            campaigns = json.load(file)
    except FileNotFoundError:
        pass

    return campaigns

@app.route("/submit-campaign", methods=["POST"])
def submit_campaign():
    data = request.get_json()
    campaigns = get_campaigns()
    database_index = len(campaigns)

    # Convert CSV data to a list of email strings
    csv_data = data.get('emailingList')
    email_name_dict = helper.parse_csv_data(csv_data)

    # Create a new campaign dictionary
    campaign = {
        'id': database_index,
        'campaignName': data['campaignName'],
        'emailingList': email_name_dict,
        'campaignType': data['campaignType'],
        'dateTime': data['dateTime']
    }
    print(campaign)

    # Append the new campaign to the campaigns list
    campaigns.append(campaign)

    # Save the updated campaigns list to campaigns.json
    with open(json_file, 'w') as file:
        json.dump(campaigns, file, indent=4)

    user_input = input("Send out all emails? (Y/N): ")
    if user_input == "Y":
        print("Emails sent!")
        send_email_from_database(database_index)
    else:
        pass

    return jsonify({"message": "Form data saved successfully!"})

# Sends email from the database
def send_email_from_database(index):

    # Define path to the JSON file 
    json_file = 'campaigns.json'

    # Open JSON file for reading
    with open(json_file, 'r') as file:
        # Parse JSON data into python data structure
        data = json.load(file)

    campaign = data[index]
    campaign_type = campaign['campaignType']

    # Dict which maps the string to email template html file
    email_map = {
        'Adobe Change Password': ('adobe.html', 'Your Adobe security profile has changed'),
        'Facebook Login Verification': ('facebook.html', '[ACTION REQUIRED] Facebook Security Alert'),
        'Google Drive Shared Folder': ('google_drive.html', 'Google Notifications has invited you to view a folder'),
        'Google Sign-In Attempt': ('google_account.html', 'Google sign-in attempt was blocked'),
        'Instagram Suspicious Login': ('instagram.html', 'We noticed a new login in your Instagram'),
        'Office 365 Password Request': ('office365.html', 'Office 365: We Recieved a password reset request')
    }

    email_template = email_map[campaign_type][0]
    subject = email_map[campaign_type][1]
    recipients = campaign['emailingList']
    print(f'{email_template} {subject} {recipients}')

    email_handler.send_email(email_template, subject, recipients)


#--------------------- Run Server ---------------------#
if __name__ == '__main__':
    app.run('127.0.0.1', port='3000', debug=True)
