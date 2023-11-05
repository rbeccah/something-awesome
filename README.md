# something-awesome

Project written for COMP6841 Something Awesome Project completed in 23T3. This tool is for educational purposes only! Author is not responsible for misuse of this tool. 

PhishGuardX is an innovative anti-phishing educational platform designed to enhance the awareness and protection against phishing atacks. This 
platform empowers users by simulating fake phishing campaigns, providing hands-on experience to recognise and respond to phishing attempts. 

## Installation
- You will need to have Node.js (v14.16+). Vite is used for frontend tooling

## How to Run this Project
```
git clone git@github.com:rbeccah/something-awesome.git
pip install Flask-Cors
```

Open two terminals. 

### First terminal (frontend):
```
cd dashboard-frontend
npm install
npm run dev
```
Then go to browser `localhost:3001`

### Second terminal (backend):
```
cd flask-server
python3 server.py
```

### Setting up Google App Passwords:
In order to be able to use the Google SMTP server, you will also need to set up a Google App Password on the Google account that you 
wish to phishing simulations from. 
Further details on how to set up the Google App Password can be found here -> https://support.google.com/accounts/answer/185833?hl=en


## Acknowledgements
- Frontend React Template by TailAdmin (https://github.com/TailAdmin/free-react-tailwind-admin-dashboard/tree/main)
- Email templates from CanIPhish Website (https://caniphish.com/free-phishing-test/phishing-email-templates)
- Website templates from ZPhisher (https://github.com/htr-tech/zphisher)
- Phishing Dataset for Machine Learning (https://data.mendeley.com/datasets/h3cgnj8hft/1)