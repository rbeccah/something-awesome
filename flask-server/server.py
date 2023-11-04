from flask import Flask, request, jsonify
import json
import csv
from io import StringIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

# Define the path to the JSON file
json_file = 'campaigns.json'

# Initialize the campaigns list with existing data or an empty list
campaigns = []

# Load existing data from campaigns.json if it exists
try:
    with open(json_file, 'r') as file:
        campaigns = json.load(file)
except FileNotFoundError:
    pass

@app.route("/submit-campaign", methods=["POST"])
def submit_campaign():
    data = request.get_json()
    print(data)

    # Convert CSV data to a list of email strings
    csv_data = data.get('emailingList')
    email_list = csv_data.split('\r\n') # Split the string into a list

    # Create a new campaign dictionary
    campaign = {
        'campaignName': data['campaignName'],
        'emailingList': email_list,
        'campaignType': data['campaignType'],
        'dateTime': data['dateTime']
    }

    # # # Append the new campaign to the campaigns list
    # campaigns.append(campaign)

    # # # Save the updated campaigns list to campaigns.json
    # with open(json_file, 'w') as file:
    #     json.dump(campaigns, file, indent=4)

    return jsonify({"message": "Form data saved successfully!"})

if __name__ == '__main__':
    app.run('127.0.0.1', port='3000', debug=True)
