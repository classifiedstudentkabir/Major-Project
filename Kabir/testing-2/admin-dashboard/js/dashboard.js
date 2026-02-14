// Dashboard Logic - Protected Route + Tabs + Lead Management
import { auth, db, ADMIN_EMAIL } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
    collection,
    query,
    orderBy,
    getDocs,
    doc,
    updateDoc,
    getDoc,
    setDoc,
    where,
    Timestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

let currentUser = null;
let allLeads = [];
let filteredLeads = [];

// ==================== SAFE HELPERS ====================
function safeText(v) {
    return String(v ?? "");
}

function escapeHtml(v) {
    return safeText(v)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==================== AUTH CHECK ====================
onAuthStateChanged(auth, async (user) => {
    if (!user || user.email !== ADMIN_EMAIL) {
        // Not authenticated or not admin, redirect to login
        window.location.href = 'index.html';
        return;
    }

    currentUser = user;
    document.getElementById('user-email').textContent = user.email;

    // Load dashboard data
    await loadDashboardData();
});

// ==================== LOGOUT ====================
document.getElementById('logout-btn').addEventListener('click', logout);
document.getElementById('logout-btn-settings').addEventListener('click', logout);

async function logout() {
    try {
        await signOut(auth);
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Logout error:', error);
        alert('Failed to logout. Please try again.');
    }
}

// ==================== TAB NAVIGATION ====================
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabName = item.dataset.tab;

        // Remove active class from all
        navItems.forEach(nav => nav.classList.remove('active'));
        tabContents.forEach(tab => tab.classList.remove('active'));

        // Add active class to clicked
        item.classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    });
});

// ==================== LOAD DASHBOARD DATA ====================
async function loadDashboardData() {
    await loadLeads();
    await loadSecuritySettings();
    await calculateSubmissionRate();
}

// ==================== LEADS MANAGEMENT ====================
async function loadLeads() {
    try {
        const leadsRef = collection(db, 'leads');
        const q = query(leadsRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        allLeads = [];
        snapshot.forEach(doc => {
            allLeads.push({
                id: doc.id,
                ...doc.data()
            });
        });

        filteredLeads = [...allLeads];

        updateStats();
        renderLeadsTable();
        renderRecentLeads();

    } catch (error) {
        console.error('Error loading leads:', error);
        document.getElementById('leads-tbody').innerHTML =
            '<tr><td colspan="8" class="error-row">Error loading leads. Check permissions.</td></tr>';
    }
}

function updateStats() {
    const total = allLeads.length;
    const newLeads = allLeads.filter(l => !l.status || l.status === 'new').length;
    const contacted = allLeads.filter(l => l.status === 'contacted').length;
    const closed = allLeads.filter(l => l.status === 'closed').length;

    document.getElementById('total-leads').textContent = total;
    document.getElementById('new-leads').textContent = newLeads;
    document.getElementById('contacted-leads').textContent = contacted;
    document.getElementById('closed-leads').textContent = closed;
}

function renderRecentLeads() {
    const recent = allLeads.slice(0, 5);
    const container = document.getElementById('recent-leads-list');

    if (recent.length === 0) {
        container.innerHTML = '<p>No leads yet.</p>';
        return;
    }

    container.innerHTML = recent.map(lead => `
        <div class="lead-preview-item">
            <div class="lead-info">
                <strong>${lead.name}</strong>
                <span>${lead.email}</span>
            </div>
            <div class="lead-meta">
                <span class="service-tag">${lead.service || 'N/A'}</span>
                <span class="date-tag">${formatDate(lead.createdAt)}</span>
            </div>
        </div>
    `).join('');
}

function renderLeadsTable() {
    const tbody = document.getElementById('leads-tbody');

    if (filteredLeads.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-row">No leads found</td></tr>';
        return;
    }

    tbody.innerHTML = filteredLeads.map(lead => {
        // Field fallbacks for old/new docs
        const name = lead.name ?? "";
        const email = lead.email ?? "";
        const phone = lead.phone ?? "";
        const service = lead.service ?? "N/A";
        const location = lead.siteLocation ?? lead.location ?? "N/A";

        return `
        <tr>
            <td>${formatDate(lead.createdAt)}</td>
            <td>${escapeHtml(name)}</td>
            <td>${escapeHtml(email)}</td>
            <td>${escapeHtml(phone)}</td>
            <td>${escapeHtml(service)}</td>
            <td>${escapeHtml(location)}</td>
            <td>
                <select class="status-select" data-lead-id="${lead.id}" onchange="updateLeadStatus(this)">
                    <option value="new" ${(!lead.status || lead.status === 'new') ? 'selected' : ''}>New</option>
                    <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                    <option value="closed" ${lead.status === 'closed' ? 'selected' : ''}>Closed</option>
                </select>
            </td>
            <td>
                <button class="btn-view" onclick="viewLeadDetails('${lead.id}')">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        </tr>
        `;
    }).join('');
}

// Make functions globally available
window.updateLeadStatus = async function (selectElement) {
    const leadId = selectElement.dataset.leadId;
    const newStatus = selectElement.value;

    try {
        const leadRef = doc(db, 'leads', leadId);
        await updateDoc(leadRef, {
            status: newStatus,
            updatedAt: Timestamp.now()
        });

        // Update local data
        const lead = allLeads.find(l => l.id === leadId);
        if (lead) {
            lead.status = newStatus;
        }

        updateStats();
        renderRecentLeads();

        console.log(`Lead ${leadId} updated to ${newStatus}`);
    } catch (error) {
        console.error('Error updating lead status:', error);
        alert('Failed to update lead status. Check permissions.');
        selectElement.value = allLeads.find(l => l.id === leadId).status || 'new';
    }
};

window.viewLeadDetails = function (leadId) {
    const lead = allLeads.find(l => l.id === leadId);
    if (!lead) return;

    const modal = document.getElementById('lead-modal');
    const modalBody = document.getElementById('modal-body');

    // Field fallbacks for old/new docs
    const name = lead.name ?? "";
    const email = lead.email ?? "";
    const phone = lead.phone ?? "";
    const service = lead.service ?? "N/A";
    const location = lead.siteLocation ?? lead.location ?? "N/A";
    const budget = lead.budget ?? lead.budgetRange ?? "Not specified";
    const message = lead.message ?? "N/A";

    modalBody.innerHTML = `
        <div class="lead-details">
            <div class="detail-row">
                <strong>Name:</strong>
                <span>${escapeHtml(name)}</span>
            </div>
            <div class="detail-row">
                <strong>Email:</strong>
                <span>${escapeHtml(email)}</span>
            </div>
            <div class="detail-row">
                <strong>Phone:</strong>
                <span>${escapeHtml(phone)}</span>
            </div>
            <div class="detail-row">
                <strong>Service:</strong>
                <span>${escapeHtml(service)}</span>
            </div>
            <div class="detail-row">
                <strong>Site Location:</strong>
                <span>${escapeHtml(location)}</span>
            </div>
            <div class="detail-row">
                <strong>Budget:</strong>
                <span>${escapeHtml(budget)}</span>
            </div>
            <div class="detail-row">
                <strong>Message:</strong>
                <span>${escapeHtml(message)}</span>
            </div>
            <div class="detail-row">
                <strong>Submitted:</strong>
                <span>${formatDate(lead.createdAt)}</span>
            </div>
            <div class="detail-row">
                <strong>Status:</strong>
                <span class="status-badge status-${lead.status || 'new'}">${lead.status || 'new'}</span>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
};

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('lead-modal').style.display = 'none';
});

// ==================== SEARCH & FILTER ====================
document.getElementById('search-leads').addEventListener('input', (e) => {
    applyFilters();
});

document.getElementById('status-filter').addEventListener('change', () => {
    applyFilters();
});

function applyFilters() {
    const searchTerm = document.getElementById('search-leads').value.toLowerCase();
    const statusFilter = document.getElementById('status-filter').value;

    filteredLeads = allLeads.filter(lead => {
        // Safe field access for search
        const name = safeText(lead.name).toLowerCase();
        const email = safeText(lead.email).toLowerCase();
        const phone = safeText(lead.phone).toLowerCase();
        const location = safeText(lead.siteLocation ?? lead.location).toLowerCase();

        const matchesSearch =
            name.includes(searchTerm) ||
            email.includes(searchTerm) ||
            phone.includes(searchTerm) ||
            location.includes(searchTerm);

        const matchesStatus =
            statusFilter === 'all' ||
            (!lead.status && statusFilter === 'new') ||
            lead.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    renderLeadsTable();
}

// ==================== EXPORT CSV ====================
document.getElementById('export-csv-btn').addEventListener('click', () => {
    if (filteredLeads.length === 0) {
        alert('No leads to export');
        return;
    }

    const headers = ['Date', 'Name', 'Email', 'Phone', 'Service', 'Location', 'Budget', 'Message', 'Status'];
    const csvRows = [headers.join(',')];

    filteredLeads.forEach(lead => {
        const row = [
            formatDate(lead.createdAt),
            csvEscape(lead.name),
            csvEscape(lead.email),
            csvEscape(lead.phone),
            csvEscape(lead.service || ''),
            csvEscape(lead.siteLocation || ''),
            csvEscape(lead.budget || ''),
            csvEscape(lead.message || ''),
            lead.status || 'new'
        ];
        csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
});

// ==================== SECURITY CONTROLS ====================
async function loadSecuritySettings() {
    try {
        const settingsRef = doc(db, 'settings', 'site');
        const settingsSnap = await getDoc(settingsRef);

        if (settingsSnap.exists()) {
            const settings = settingsSnap.data();
            document.getElementById('maintenance-toggle').checked = settings.maintenanceEnabled || false;
            document.getElementById('formlock-toggle').checked = settings.formLocked || false;
        }
    } catch (error) {
        console.error('Error loading security settings:', error);
    }
}

document.getElementById('maintenance-toggle').addEventListener('change', async (e) => {
    await updateSecuritySetting('maintenanceEnabled', e.target.checked);
});

document.getElementById('formlock-toggle').addEventListener('change', async (e) => {
    await updateSecuritySetting('formLocked', e.target.checked);
});

async function updateSecuritySetting(field, value) {
    try {
        const settingsRef = doc(db, 'settings', 'site');
        await setDoc(settingsRef, {
            [field]: value,
            updatedAt: Timestamp.now()
        }, { merge: true });

        console.log(`${field} updated to ${value}`);
    } catch (error) {
        console.error('Error updating security setting:', error);
        alert('Failed to update setting. Check permissions.');
    }
}

async function calculateSubmissionRate() {
    try {
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        const recentLeads = allLeads.filter(lead => {
            if (!lead.createdAt) return false;
            const createdDate = lead.createdAt.toDate ? lead.createdAt.toDate() : new Date(lead.createdAt);
            return createdDate >= oneHourAgo;
        });

        const count = recentLeads.length;
        document.getElementById('submissions-last-hour').textContent = count;

        const warning = document.getElementById('rate-warning');
        if (count > 10) {
            warning.style.display = 'flex';
        } else {
            warning.style.display = 'none';
        }
    } catch (error) {
        console.error('Error calculating submission rate:', error);
    }
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(timestamp) {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Note: escapeHtml is now defined at the top with safeText helper

function csvEscape(text) {
    if (!text) return '';
    text = String(text);
    if (text.includes(',') || text.includes('"') || text.includes('\n')) {
        return '"' + text.replace(/"/g, '""') + '"';
    }
    return text;
}
