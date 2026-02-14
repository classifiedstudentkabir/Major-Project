import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

function ensureBanner() {
    let banner = document.getElementById("maintenance-banner");
    if (!banner) {
        banner = document.createElement("div");
        banner.id = "maintenance-banner";
        banner.style.cssText =
            "display:none; position:sticky; top:0; z-index:9999; background:#ff6b2c; color:#fff; padding:10px 14px; text-align:center; font-weight:600;";
        banner.innerHTML = "🛠️ Site maintenance in progress. Some features may be temporarily unavailable.";
        document.body.prepend(banner);
    }
    return banner;
}

async function loadMaintenance() {
    try {
        const banner = ensureBanner();
        const snap = await getDoc(doc(db, "settings", "site"));
        const data = snap.exists() ? snap.data() : {};
        banner.style.display = data.maintenanceMode ? "block" : "none";
    } catch (e) {
        // silently ignore (don’t break page)
        console.warn("Maintenance check failed:", e);
    }
}

loadMaintenance();
