// contact.js - Firebase contact form submission
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Replace with your Firebase project config (safe to expose in client apps)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const statusEl = document.getElementById("form-status");
const form = document.getElementById("contact-form");

const isConfigPlaceholder = Object.values(firebaseConfig).some((value) =>
    typeof value === "string" && value.includes("YOUR_")
);

if (isConfigPlaceholder) {
    if (statusEl) {
        statusEl.textContent = "Firebase config is missing. Please add your project details in js/contact.js.";
        statusEl.style.color = "#b33";
    }
} else {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                if (statusEl) {
                    statusEl.textContent = "Please fill out all fields.";
                    statusEl.style.color = "#b33";
                }
                return;
            }

            if (statusEl) {
                statusEl.textContent = "Sending...";
                statusEl.style.color = "#555";
            }

            try {
                await addDoc(collection(db, "contacts"), {
                    name,
                    email,
                    message,
                    createdAt: serverTimestamp()
                });

                if (statusEl) {
                    statusEl.textContent = "Thanks! Your message has been sent.";
                    statusEl.style.color = "#2a7b4f";
                }

                form.reset();
            } catch (error) {
                if (statusEl) {
                    statusEl.textContent = "Something went wrong. Please try again later.";
                    statusEl.style.color = "#b33";
                }
                console.error("Contact form error:", error);
            }
        });
    }
}
