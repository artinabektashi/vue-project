import admin from "firebase-admin";

import serviceAccount from "../../credentials/library-1ef59-firebase-adminsdk-2jsza-66d8f313b7.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;