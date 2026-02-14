// Authentication Logic for Login Page
import { auth, ADMIN_EMAIL } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
    if (user && user.email === ADMIN_EMAIL) {
        // User is signed in and is admin, redirect to dashboard
        window.location.href = 'dashboard.html';
    }
});

// Handle login form submission
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const btnText = loginBtn.querySelector('.btn-text');
const btnLoader = loginBtn.querySelector('.btn-loader');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Clear previous errors
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Validate admin email
    if (email !== ADMIN_EMAIL) {
        showError('Access denied. Only authorized admin can login.');
        return;
    }

    // Show loading state
    loginBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Login successful
        console.log('Login successful:', userCredential.user.email);

        // Redirect to dashboard
        window.location.href = 'dashboard.html';

    } catch (error) {
        console.error('Login error:', error);

        let message = 'Login failed. Please try again.';

        switch (error.code) {
            case 'auth/invalid-email':
                message = 'Invalid email address format.';
                break;
            case 'auth/user-disabled':
                message = 'This account has been disabled.';
                break;
            case 'auth/user-not-found':
                message = 'No account found with this email.';
                break;
            case 'auth/wrong-password':
                message = 'Incorrect password. Please try again.';
                break;
            case 'auth/invalid-credential':
                message = 'Invalid credentials. Please check your email and password.';
                break;
            case 'auth/too-many-requests':
                message = 'Too many failed login attempts. Please try again later.';
                break;
            default:
                message = `Login error: ${error.message}`;
        }

        showError(message);

        // Reset button state
        loginBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }
});

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Password Toggle Logic
const togglePasswordBtn = document.getElementById('toggle-password');
if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle icon
        const icon = togglePasswordBtn.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');

        // Update aria-label
        togglePasswordBtn.setAttribute('aria-label', type === 'password' ? 'Show password' : 'Hide password');
    });
}
