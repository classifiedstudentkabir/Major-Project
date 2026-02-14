// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBbv7iXtltfSV7Jl30640TChMA2qraxEFA",
    authDomain: "civil-contractor-cp.firebaseapp.com",
    projectId: "civil-contractor-cp",
    storageBucket: "civil-contractor-cp.firebasestorage.app",
    messagingSenderId: "975422198544",
    appId: "1:975422198544:web:4265656e8f9e695a8d4b95",
    measurementId: "G-QYMMY5W9YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Admin email whitelist
export const ADMIN_EMAIL = "mytemporarygeneratedid2@gmail.com";
