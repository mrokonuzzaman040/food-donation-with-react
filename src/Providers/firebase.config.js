
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: import.meta.env.Firebase_Auth_apiKey,
    authDomain: import.meta.env.Firebase_Auth_authDomain,
    projectId: import.meta.env.Firebase_Auth_projectId,
    storageBucket: import.meta.env.Firebase_Auth_storageBucket,
    messagingSenderId: import.meta.env.Firebase_Auth_messagingSenderId,
    appId: import.meta.env.Firebase_Auth_appId,
    measurementId: import.meta.env.Firebase_Auth_measurementId,
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;