document.addEventListener('DOMContentLoaded', () => {
    //--Sections for toggling---
    const signupSection = document.getElementById('signupSection');
    const loginSection = document.getElementById('loginSection');
    const showLogin = document.getElementById('showLogin');
    const showSignup = document.getElementById('showSignup');

    // Switch to login
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Switch back to signup
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    });

    // -------------------
    // SIGNUP VALIDATION
    // -------------------
    const form = document.getElementById('signupForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const success = document.getElementById('success');

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    form.addEventListener('submit', e => {
        e.preventDefault();

        let valid = true;

        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        const emailValue = email.value.trim();
        if (emailValue === "") {
            emailError.textContent = 'Email is required';
            valid = false;
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = "Enter a valid email";
            valid = false;
        }

        const passwordValue = password.value.trim();
        if (passwordValue === '') {
            passwordError.textContent = 'Password is required';
            valid = false;
        } else if (passwordValue.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            valid = false;
        }

        const confirmPasswordValue = confirmPassword.value.trim();
        if (confirmPasswordValue === '') {
            confirmPasswordError.textContent = 'Please confirm password';
            valid = false;
        } else if (passwordValue !== confirmPasswordValue) {
            confirmPasswordError.textContent = 'Passwords do not match';
            valid = false;
        }

        if (valid) {
            success.textContent = 'Signup successful!';
            form.reset();
        }
    });

    // -------------------
    // LOGIN VALIDATION
    // -------------------
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');
    const loginSuccess = document.getElementById('loginSuccess');

    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        let valid = true;

        loginEmailError.textContent = '';
        loginPasswordError.textContent = '';
        loginSuccess.textContent = '';

        if (loginEmail.value.trim() === '') {
            loginEmailError.textContent = 'Email is required';
            valid = false;
        }

        if (loginPassword.value.trim() === '') {
            loginPasswordError.textContent = 'Password is required';
            valid = false;
        }

        if (valid) {
            loginSuccess.textContent = 'Login successful!';
            loginForm.reset();
        }
    });
});
