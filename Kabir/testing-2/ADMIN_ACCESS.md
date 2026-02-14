# Admin Dashboard - Quick Access Guide

## 🔐 Admin Panel Credentials

**Login URL (Local):** `file:///E:/Kabirji Folder/Project on github/Major-Project/Kabir/testing-2/admin-dashboard/index.html`

**Admin Email:** `krishnaenterprises1001@gmail.com`  
**Password:** You need to create this user in Firebase Authentication first (see Setup below)

---

## 🚀 Quick Start (Local Testing)

### Method 1: Direct File Access
1. Navigate to: `E:\Kabirji Folder\Project on github\Major-Project\Kabir\testing-2\admin-dashboard\`
2. Double-click `index.html`
3. Or paste this in your browser:
   ```
   file:///E:/Kabirji%20Folder/Project%20on%20github/Major-Project/Kabir/testing-2/admin-dashboard/index.html
   ```

### Method 2: Local Server (Recommended)
```bash
# Using Python
cd "E:\Kabirji Folder\Project on github\Major-Project\Kabir\testing-2\admin-dashboard"
python -m http.server 8080

# Then open in browser:
http://localhost:8080
```

```bash
# Using Node.js
cd "E:\Kabirji Folder\Project on github\Major-Project\Kabir\testing-2\admin-dashboard"
npx http-server -p 8080

# Then open:
http://localhost:8080
```

---

## ⚙️ Initial Setup Required

### Step 1: Create Admin User in Firebase
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to **Authentication** → **Users**
4. Click **Add user**
5. Email: `krishnaenterprises1001@gmail.com`
6. Set a strong password (save it securely!)
7. Click **Add user**

### Step 2: Enable Email/Password Authentication
1. In Firebase Console → **Authentication**
2. Go to **Sign-in method** tab
3. Enable **Email/Password** provider
4. Save

### Step 3: Create Firestore Settings Document
1. Go to **Firestore Database** in Firebase Console
2. Navigate to or create collection: `settings`
3. Create document with ID: `site`
4. Add fields:
   ```
   maintenanceEnabled: false (boolean)
   formLocked: false (boolean)
   updatedAt: <click "Add server timestamp">
   ```
5. Save

### Step 4: Apply Security Rules
1. Go to **Firestore Database** → **Rules** tab
2. Copy the contents of `firestore.rules` file from admin-dashboard folder
3. Paste into the rules editor
4. Click **Publish**

---

## 📋 What's in the Dashboard

### Tab 1: Overview
- Total leads count
- Status breakdown (New/Contacted/Closed)
- Recent 5 leads preview

### Tab 2: Leads Management
- Full data table with all lead details
- Search by name, email, phone, location
- Filter by status
- Update lead status inline
- View detailed modal
- Export to CSV

### Tab 3: Security Controls
- Toggle **Maintenance Mode** (shows banner on public site)
- Toggle **Form Lock** (disables contact form)
- Submission rate monitoring (spam detection)

### Tab 4: Settings
- Quick links to Firebase Console
- Logout button

---

## 🔑 Admin Panel Email & Password

**IMPORTANT:** The password is NOT stored anywhere in the code for security reasons.

**Admin Email:** `krishnaenterprises1001@gmail.com` (hardcoded in `firebase-config.js`)

**Password:** You must create this when setting up the Firebase user (Step 1 above)

**Recommendation:** Use a strong password generator and store it in a password manager.

---

## 🧪 Testing the Dashboard

1. Open dashboard login page
2. Enter: `krishnaenterprises1001@gmail.com`
3. Enter the password you created in Firebase
4. Click "Sign In"
5. You should be redirected to `dashboard.html`
6. Verify all 4 tabs load correctly
7. Check that leads (if any) appear in the table

---

## ⚠️ Troubleshooting

**"Access denied" error:**
- Verify email is exactly `krishnaenterprises1001@gmail.com`
- Check that user exists in Firebase Authentication
- Ensure password is correct

**Dashboard redirects to login:**
- Clear browser cookies and cache
- Check browser console for errors
- Verify Firebase config in `js/firebase-config.js` is correct

**Leads don't load:**
- Check Firestore security rules are applied
- Verify you're logged in with admin email
- Open browser console to see permission errors

---

## 🌐 Deployment (Optional)

The admin dashboard is intentionally separate from the public site and should be deployed to a different URL.

**GitHub Pages Option:**
1. Create NEW private repository: `krishna-admin`
2. Push admin-dashboard folder contents
3. Enable GitHub Pages
4. Access at: `https://yourusername.github.io/krishna-admin/`

**Vercel Option:**
```bash
cd admin-dashboard
vercel --prod
```

**SECURITY NOTE:** Do NOT link to admin dashboard from public website. Keep the URL private.

---

## 📁 Files Structure

```
admin-dashboard/
├── index.html           # Login page
├── dashboard.html       # Main admin panel
├── README.md           # Full documentation
├── firestore.rules     # Security rules
├── css/
│   └── admin-styles.css
└── js/
    ├── firebase-config.js  # Firebase init (UPDATE THIS!)
    ├── auth.js            # Login logic
    └── dashboard.js       # Dashboard functionality
```

---

*For complete documentation, see `admin-dashboard/README.md`*
