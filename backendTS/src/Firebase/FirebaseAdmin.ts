import admin from 'firebase-admin';
const serviceAccount = require('./zetta2-firebase-adminsdk-9avfc-34e9e39aca.json'); 

// Inicialize o Firebase Admin SDK com as credenciais
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://zetta2.firebaseapp.com"
});

const db = admin.firestore();

module.exports = { admin, db };
