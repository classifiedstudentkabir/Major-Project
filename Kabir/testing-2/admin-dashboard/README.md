# Krishna Enterprises Admin Dashboard

A secure, modern admin dashboard for managing leads, security controls, and site settings for Krishna Enterprises construction company website.

## 🎯 Features

- **Firebase Authentication**: Secure login restricted to admin email only
- **Lead Management**: View, search, filter, update status, and export leads to CSV
- **Security Controls**: Toggle maintenance mode and form lock via Firestore
- **Submission Monitoring**: Track lead submission rate with spam detection alerts
- **Protected Routes**: Dashboard accessible only to authenticated admin users
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📁 Structure

```
admin-dashboard/
├── index.html              # Login page
├── dashboard.html          # Main dashboard (protected)
├── css/
│   └── admin-styles.css    # All dashboard styles
├── js/
│   ├── firebase-config.js  # Firebase initialization
│   ├── auth.js            # Login logic
│   └── dashboard.js       # Dashboard functionality
├── README.md              # This file
└── firestore.rules        # Security rules for Firebase
```

## 🚀 Setup Instructions

### 1. Firebase Configuration

**Update `js/firebase-config.js`** with your actual Firebase project credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 2. Enable Firebase Authentication

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to **Authentication** > **Sign-in method**
4. Enable **Email/Password** provider
5. Go to **Users** tab
6. Click **Add user**
7. Create user with email: `krishnaenterprises1001@gmail.com`
8. Set a strong password

### 3. Create Firestore Document

Create the settings document for security controls:

**Path**: `settings/site`

**Fields**:
```json
{
  "maintenanceEnabled": false,
  "formLocked": false,
  "updatedAt": <Firestore ServerTimestamp>
}
```

### 4. Apply Firestore Security Rules

1. Go to **Firestore Database** > **Rules**
2. Copy the contents of `firestore.rules` file
3. Paste and **Publish** the rules

### 5. Deploy Dashboard

#### Option A: GitHub Pages (Separate Repo)

1. Create a new repository (e.g., `krishna-admin`)
2. Push admin-dashboard folder contents
3. Enable GitHub Pages in Settings
4. Access at: `https://yourusername.github.io/krishna-admin/`

#### Option B: Vercel

```bash
cd admin-dashboard
vercel --prod
```

#### Option C: Local Testing (REQUIRED)
> **IMPORTANT:** You CANNOT run the dashboard by double-clicking index.html (file:// protocol) because Firebase Authentication will be blocked by CORS policy. You MUST use a local server.

```bash
# Using Python
cd admin-dashboard
python -m http.server 8080

# Using Node.js
npx http-server -p 8080
```

Then visit: `http://localhost:8080`

## 🔐 Security Features

### Admin Email Whitelist
Only `krishnaenterprises1001@gmail.com` can login.

### Firestore Rules
- **Public site**: Can only CREATE leads (with validation)
- **Admin only**: Can read, update, delete leads and modify settings
- **Authentication required**: All admin operations require valid Firebase Auth token
- **Email validation**: Server-side check that authenticated user is the admin

### Protected Routes
Dashboard automatically redirects to login if:
- User is not authenticated
- User email doesn't match admin email

## 📊 Dashboard Tabs

### 1. Overview
- Total leads count
- New/Contacted/Closed statistics
- Recent 5 leads preview

### 2. Leads Management
- Full leads table with all details
- Search by name, email, phone, location
- Filter by status (New/Contacted/Closed)
- Update lead status inline
- View detailed lead information in modal
- Export filtered leads to CSV

### 3. Security Controls
- **Maintenance Mode Toggle**: Shows banner on public site
- **Form Lock Toggle**: Disables contact form submissions
- **Submission Rate Monitoring**: Shows leads in last 60 minutes with spam alert

### 4. Settings
- Quick links to Firebase console
- Logout button

## 🎨 Design

The dashboard uses Krishna Enterprises branding:
- **Primary**: Navy Blue `#0B1C39`
- **Accent**: Orange `#FF6B35`
- Clean, modern interface
- Card-based layout
- Responsive grid system

## 📝 CSV Export

Exported CSV includes:
- Date & Time
- Name, Email, Phone
- Service, Location, Budget
- Message
- Status

File naming: `leads_YYYY-MM-DD.csv`

## 🐛 Troubleshooting

### "Access denied" error on login
✅ Ensure the email is exactly: `krishnaenterprises1001@gmail.com`
✅ Check Firebase Console > Authentication > Users that user exists

### "Error loading leads" message
✅ Verify Firestore rules are applied correctly
✅ Check Firebase Console > Firestore > Rules tab
✅ Ensure admin user is authenticated

### Settings toggles don't work
✅ Create `settings/site` document in Firestore if missing
✅ Verify Firestore rules allow admin to write to settings collection

### Dashboard shows blank/redirects to login
✅ Clear browser cache and cookies
✅ Check browser console for errors
✅ Verify Firebase config is correct

## 🔄 Maintenance

### Updating Admin Email
1. Open `js/firebase-config.js`
2. Change `ADMIN_EMAIL` constant
3. Create new user in Firebase Authentication with new email (`mytemporarygeneratedid2@gmail.com`)
4. Redeploy dashboard

### Adding More Admins
Currently supports single admin. To add multi-admin:
1. Change `ADMIN_EMAIL` to `ADMIN_EMAILS` array
2. Update auth logic in `auth.js` and `dashboard.js`
3. Update Firestore rules to check against array

## 📞 Support

For technical issues:
- Check Firebase Console logs
- Review browser console for JavaScript errors
- Verify all setup steps completed correctly

---

**Version**: 1.0.0  
**Last Updated**: February 14, 2026  
**Author**: Krishna Enterprises Development Team
