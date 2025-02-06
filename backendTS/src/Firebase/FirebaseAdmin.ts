import * as admin from 'firebase-admin';
import serviceAccount from './zetta69-50d36-firebase-adminsdk-fbsvc-7f006cb97e.json';
import { ServiceAccount } from 'firebase-admin';

const LocalserviceAccount: ServiceAccount = serviceAccount as ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(LocalserviceAccount),
  databaseURL: "https://zetta69.firebaseapp.com"
});

const db = admin.firestore();

export { admin, db };
