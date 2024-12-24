import admin from 'firebase-admin';
const serviceAccount = require('./zetta4-3b4d5-firebase-adminsdk-gg5kx-2331bdcd30.json'); 

// Inicialize o Firebase Admin SDK com as credenciais
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://Zetta4.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
