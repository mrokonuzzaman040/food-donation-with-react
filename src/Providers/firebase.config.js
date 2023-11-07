
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBW6ct6DpNw0TZUde_Ztv7Q_6GbZH6HR3U",
    authDomain: "food-donation-8087b.firebaseapp.com",
    projectId: "food-donation-8087b",
    storageBucket: "food-donation-8087b.appspot.com",
    messagingSenderId: "662598133240",
    appId: "1:662598133240:web:91f285c919ea5ca90b220d",
    measurementId: "G-XESJ7QN8ZQ"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;