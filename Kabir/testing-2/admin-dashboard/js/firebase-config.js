// Firebase Configuration
// Copy from the main site's firebase.js but export the instances
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIza....",
    authDomain: "civil-contractor-cp.firebaseapp.com",
    projectId: "civil-contractor-cp",
    storageBucket: "civil-contractor-cp.appspot.com",
    messagingSenderId: "9754....",
    appId: "1:9754....:web:...."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Admin email whitelist
export const ADMIN_EMAIL = "krishnaenterprises1001@gmail.com";
