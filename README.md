# Cloud Function BoilerPlate 

This is the boilerplate Cloud Functions service.

## 💻 Technologies

- [Firebase Cloud Functions](https://firebase.google.com/docs/functions): serverless compute service.
- [Firebase Firestore](https://firebase.google.com/docs/firestore): NoSQL database.
- [TypeScript](https://www.typescriptlang.org/): programming language.
- [NPM](https://www.npmjs.com/): package manager.

## 🛠 Developer Setup

Please make sure you have the following configuration ready to develop and test the project:

1. [Install the Firebase CLI](https://firebase.google.com/docs/functions/get-started?gen=2nd)

2. Configure your Firebase credentials on your machine, you can use the following commands:
```
firebase login
```

You will need this to run the tests and to try the Cloud Functions locally.

## 🚀 Firebase Emulator Start
We are using Firebase Emulator to develop and test our Cloud Functions locally. Follow the next steps to run Firebase Emulator and emulate Firebase Cloud Functions and Firebase firestore:

1. Switch to the right node version (If you are using nvm):
```
nvm use
```
1. Install dependencies by executing this command:
```
cd functions
npm install
```
3. Build the serverless application and watch for changes:
```
npm run build:watch
```
4. Create the folder config into srf folder and paste nameproject-mx-firebase-adminsdk... it looks like: 
```
{
  "type": "service_account",
  "project_id": "nameproject-mx",
  "private_key_id": "xxxxxxx",
  "private_key": "-----BEGIN PRIVATE KEY----------END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xxxxxxx",
  "client_id": "xxxxxxxxxx",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxxxxxxx",
  "universe_domain": "googleapis.com"
}
```

5. In a different console. Start the firebase emulators
```
npm run serve:local
```

## 🤖 Deploy functions
1. You must have the role **Owner** in the firebase project

2. Run the following command
```
npm run deploy
```