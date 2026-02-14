# Header Navigation - Quick Test Checklist

## ✅ Test on Mobile (375px - iPhone SE)

### Homepage (index.html)
- [ ] Hamburger icon visible in top-right
- [ ] Click hamburger → Menu opens
- [ ] Hamburger transforms to X
- [ ] Language switcher (EN/HI/MR) visible
- [ ] Can navigate to other pages via menu

### Contact Page (contact.html)
- [ ] Only ONE hamburger icon (no duplicates)
- [ ] Hamburger works (opens/closes menu)
- [ ] Language switcher present
- [ ] Form accessible and functional

### All Other Pages
- [ ] Hamburger menu on every page
- [ ] Language switcher on every page
- [ ] Menu opens/closes consistently
- [ ] Can switch between EN/HI/MR

## 🌐 Language Switcher Test

1. Go to any page
2. Select "HI" from dropdown
3. Page content updates to Hindi
4. Refresh page → Hindi persists (localStorage)
5. Navigate to another page → Still Hindi
6. Switch back to "EN" → Content returns to English

## 📱 Navigation Functionality

### Mobile Menu
- [ ] Tap anywhere outside menu → Menu closes
- [ ] Press ESC key → Menu closes
- [ ] Click "Pages" → Dropdown expands
- [ ] All links functional

### Touch Targets
- [ ] Hamburger button at least 44x44px
- [ ] Easy to tap with finger
- [ ] No accidental clicks

## 🔧 Admin Dashboard Test

### Access Methods
**Option 1: Direct File**
```
file:///E:/Kabirji%20Folder/Project%20on%20github/Major-Project/Kabir/testing-2/admin-dashboard/index.html
```

**Option 2: Local Server**
```bash
cd "E:\Kabirji Folder\Project on github\Major-Project\Kabir\testing-2\admin-dashboard"
python -m http.server 8080
# Open: http://localhost:8080
```

### Login Test
- [ ] Login page loads without console errors
- [ ] Enter email: `krishnaenterprises1001@gmail.com`
- [ ] Enter password (from Firebase setup)
- [ ] Click "Sign In"
- [ ] Redirects to dashboard.html

### Dashboard Verification
- [ ] Overview tab shows stats
- [ ] Leads tab displays table
- [ ] Security tab has toggles
- [ ] Settings tab has links
- [ ] No console errors

---

## 🐛 Expected Fixes Confirmed

✅ **index.html** - Hamburger menu NOW PRESENT  
✅ **contact.html** - Only ONE hamburger (duplicate REMOVED)  
✅ **All pages** - Language switcher ADDED  
✅ **Mobile navigation** - Works on ALL pages  
✅ **Header consistency** - Identical structure everywhere  

---

## 📞 Support Info

**Admin Email:** `krishnaenterprises1001@gmail.com`  
**Password:** Created in Firebase Authentication (see ADMIN_ACCESS.md)

**Note:** Password is NOT stored in code for security. You must create it in Firebase Console first.
