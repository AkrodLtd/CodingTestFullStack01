const firebaseAdmin = require("firebase-admin");
const firebaseCredentials = require("../../firebase.json");

const firebaseInstance = firebaseAdmin.initializeApp({
  projectId: firebaseCredentials.project_id,
  databaseURL: firebaseCredentials.database_url,
  credential: firebaseAdmin.credential.cert(firebaseCredentials),
});

module.exports = firebaseInstance;
