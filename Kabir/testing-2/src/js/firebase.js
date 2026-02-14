// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIza....",
  authDomain: "civil-contractor-cp.firebaseapp.com",
  projectId: "civil-contractor-cp",
  storageBucket: "civil-contractor-cp.appspot.com",
  messagingSenderId: "9754....",
  appId: "1:9754....:web:...."
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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