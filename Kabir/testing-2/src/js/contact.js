import { saveContactForm } from "./firebase.js";

console.log("contact.js loaded ✅");

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      service: document.getElementById("service").value,
      siteLocation: document.getElementById("siteLocation").value.trim(),
      budget: document.getElementById("budget")?.value || "",
      message: document.getElementById("message").value.trim()
    };

    if (!data.name || !data.email || !data.phone || !data.service || !data.siteLocation || !data.message) {
      statusEl.textContent = "Please fill out all required fields.";
      statusEl.style.color = "#b33";
      return;
    }

    statusEl.textContent = "Sending...";
    statusEl.style.color = "#555";

    try {
      await saveContactForm(data);
      statusEl.textContent = "Thanks! Your message has been sent.";
      statusEl.style.color = "#2a7b4f";
      form.reset();
    } catch (error) {
      console.error(error);
      statusEl.textContent = "Something went wrong. Please try again.";
      statusEl.style.color = "#b33";
    }
  });
}
