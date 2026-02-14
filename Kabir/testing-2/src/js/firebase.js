// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js"; // Optional

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
const db = getFirestore(app);

// Optional Analytics (safe init)
// try { const analytics = getAnalytics(app); } catch (e) { console.log("Analytics optional"); }

export async function saveContactForm(data) {
  return await addDoc(collection(db, "leads"), {
    ...data,
    createdAt: serverTimestamp()
  });
}

/**
 * Fetch site settings from Firestore
 * Document path: settings/site
 * Returns: { maintenanceEnabled: boolean, formLocked: boolean, updatedAt: timestamp }
 */
export async function getSettings() {
  try {
    const settingsRef = doc(db, "settings", "site");
    const settingsSnap = await getDoc(settingsRef);

    if (settingsSnap.exists()) {
      return settingsSnap.data();
    } else {
      console.warn('Settings document does not exist. Using defaults.');
      return {
        maintenanceEnabled: false,
        formLocked: false
      };
    }
  } catch (error) {
    console.error('Error fetching settings:', error);
    return {
      maintenanceEnabled: false,
      formLocked: false
    };
  }
}