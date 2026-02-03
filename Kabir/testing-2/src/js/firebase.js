// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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