import { saveContactForm, getSettings } from "./firebase.js";

console.log("contact.js loaded ✅");

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
const COOLDOWN_DURATION = 60000; // 60 seconds in milliseconds

// Check maintenance mode and form lock on page load
(async function checkSettings() {
  const settings = await getSettings();

  // Show maintenance banner if enabled
  if (settings.maintenanceEnabled) {
    showMaintenanceBanner();
  }

  // Disable form if locked
  if (settings.formLocked) {
    disableForm("Contact form is temporarily unavailable. Please try again later.");
  }
})();

function showMaintenanceBanner() {
  const banner = document.createElement('div');
  banner.className = 'maintenance-banner';
  banner.innerHTML = `
    <div class="container">
      <i class="fas fa-tools"></i>
      <span>Site maintenance in progress. Some features may be temporarily unavailable.</span>
    </div>
  `;
  banner.style.cssText = `
    background: #ff6b35;
    color: white;
    padding: 12px 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 9999;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;
  document.body.insertBefore(banner, document.body.firstChild);
}

function disableForm(message) {
  if (!form) return;

  form.querySelectorAll('input, textarea, select, button').forEach(el => {
    el.disabled = true;
  });

  if (statusEl) {
    statusEl.textContent = message;
    statusEl.style.color = "#b33";
    statusEl.style.fontWeight = "bold";
  }
}

function showStatus(message, type = 'info') {
  if (!statusEl) return;

  statusEl.textContent = message;

  const colors = {
    success: "#2a7b4f",
    error: "#b33",
    warning: "#ff6b35",
    info: "#555"
  };

  statusEl.style.color = colors[type] || colors.info;
  statusEl.style.fontWeight = type === 'error' || type === 'warning' ? 'bold' : 'normal';
}

function checkCooldown() {
  const lastSubmission = localStorage.getItem('lastFormSubmit');

  if (lastSubmission) {
    const timeSinceLastSubmit = Date.now() - parseInt(lastSubmission);
    const remainingTime = COOLDOWN_DURATION - timeSinceLastSubmit;

    if (remainingTime > 0) {
      const secondsLeft = Math.ceil(remainingTime / 1000);
      return secondsLeft;
    }
  }

  return 0;
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Check cooldown
    const cooldownSeconds = checkCooldown();
    if (cooldownSeconds > 0) {
      showStatus(`Please wait ${cooldownSeconds} seconds before submitting again.`, 'warning');
      return;
    }

    // Check settings again before submission
    const settings = await getSettings();
    if (settings.formLocked) {
      showStatus("Contact form is temporarily unavailable. Please try again later.", 'error');
      return;
    }

    const data = {
      name: document.getElementById("name")?.value.trim() || "",
      email: document.getElementById("email")?.value.trim() || "",
      phone: document.getElementById("phone")?.value.trim() || "",
      service: document.getElementById("service")?.value || "",
      siteLocation: document.getElementById("siteLocation")?.value.trim() || "",
      budget: document.getElementById("budget")?.value || "",
      message: document.getElementById("message")?.value.trim() || ""
    };

    // Enhanced validation
    if (!data.name) {
      showStatus("Please enter your name.", 'error');
      document.getElementById("name")?.focus();
      return;
    }

    if (!data.email) {
      showStatus("Please enter your email address.", 'error');
      document.getElementById("email")?.focus();
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showStatus("Please enter a valid email address.", 'error');
      document.getElementById("email")?.focus();
      return;
    }

    if (!data.phone) {
      showStatus("Please enter your phone number.", 'error');
      document.getElementById("phone")?.focus();
      return;
    }

    if (!data.service) {
      showStatus("Please select a service.", 'error');
      document.getElementById("service")?.focus();
      return;
    }

    if (!data.siteLocation) {
      showStatus("Please enter the site location.", 'error');
      document.getElementById("siteLocation")?.focus();
      return;
    }

    if (!data.message) {
      showStatus("Please enter a message.", 'error');
      document.getElementById("message")?.focus();
      return;
    }

    showStatus("Sending your message...", 'info');

    // Disable submit button during submission
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      await saveContactForm(data);

      // Set cooldown timestamp
      localStorage.setItem('lastFormSubmit', Date.now().toString());

      showStatus("✓ Thanks! Your message has been sent successfully. We'll get back to you soon.", 'success');
      form.reset();

      // Re-enable submit button after 60 seconds
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        }
      }, COOLDOWN_DURATION);

    } catch (error) {
      console.error('Form submission error:', error);
      showStatus("✗ Something went wrong. Please try again or contact us directly.", 'error');

      // Re-enable submit button on error
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
}
