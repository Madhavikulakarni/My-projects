import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ==================== HELPER FUNCTIONS ====================
function showMessage(element, message, type) {
  if (!element) return;

  element.textContent = message;
  element.style.display = "block";
  element.className = `alert alert-${type}`;

  if (type === "success") {
    setTimeout(() => {
      element.style.display = "none";
    }, 3000);
  }
}

function resetMessage(element) {
  if (element) {
    element.textContent = '';
    element.style.display = 'none';
    element.className = '';
  }
}

function setLoadingState(button, isLoading, loadingText = "Processing...") {
  if (button) {
    button.disabled = isLoading;
    button.innerHTML = isLoading
      ? `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${loadingText}`
      : loadingText.replace("...", "");
  }
}

function getAuthErrorMessage(error) {
  switch (error.code) {
    case "auth/invalid-email": return "Please enter a valid email address";
    case "auth/user-not-found": return "No account found with this email";
    case "auth/wrong-password": return "Incorrect password. Please try again";
    case "auth/email-already-in-use": return "This email is already registered. Please sign in or use a different email.";
    case "auth/weak-password": return "Password must be at least 6 characters";
    case "auth/too-many-requests": return "Too many attempts. Please try again later or reset your password.";
    case "auth/network-request-failed": return "Network error. Please check your internet connection.";
    case "auth/user-disabled": return "This account has been disabled.";
    default: return "An error occurred. Please try again.";
  }
}

// ==================== FIREBASE INITIALIZATION ====================
let auth;
try {
  const firebaseConfig = {
    apiKey: "AIzaSyBG7tJ3YvOw4c2X176sC6Vl1FjMxyW3pkw",
    authDomain: "login-form-4122e.firebaseapp.com",
    projectId: "login-form-4122e",
    storageBucket: "login-form-4122e.appspot.com",
    messagingSenderId: "303975914691",
    appId: "1:303975914691:web:71556ba7da972bc1645676"
  };

  const app = initializeApp(firebaseConfig);
  auth = getAuth(app); 
  console.log("Firebase initialized successfully", app);

  // ==================== SIGN UP ====================
  const registerForm = document.getElementById('student-register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm_password').value;
      const signUpMsg = document.getElementById('signUpMsg');
      const signUpBtn = document.getElementById('Student_register-btn-id');

      resetMessage(signUpMsg);

      if (!email) {
        showMessage(signUpMsg, "Email is required", "error");
        return;
      }

      if (!password || !confirmPassword) {
        showMessage(signUpMsg, "Password fields cannot be empty", "error");
        return;
      }

      if (password !== confirmPassword) {
        showMessage(signUpMsg, "Passwords do not match", "error");
        return;
      }

      if (password.length < 6) {
        showMessage(signUpMsg, "Password must be at least 6 characters", "error");
        return;
      }

      setLoadingState(signUpBtn, true, "Creating account...");

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        showMessage(signUpMsg, "Registration successful! Redirecting...", "success");
        registerForm.reset();

        setTimeout(() => {
          window.location.href = "/regiter/studentDashboard.html";
        }, 1500);

      } catch (error) {
        console.error("Registration error:", error);
        showMessage(signUpMsg, getAuthErrorMessage(error), "error");
      } finally {
        setLoadingState(signUpBtn, false, "Sign Up");
      }
    });
  }

  // ==================== SIGN IN ====================
  const loginForm = document.getElementById('student-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('login_email').value.trim();
      const password = document.getElementById('login_password').value;
      const signInMsg = document.getElementById('signInMsg');
      const loginBtn = document.getElementById('Student_login-btn-id');

      resetMessage(signInMsg);

      if (!email || !password) {
        showMessage(signInMsg, "Please enter both email and password", "error");
        return;
      }

      setLoadingState(loginBtn, true, "Signing in...");

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        showMessage(signInMsg, "Login successful! Redirecting...", "success");

        setTimeout(() => {
          window.location.href = "/regiter/studentDashboard.html";
        }, 1500);

      } catch (error) {
        console.error("Login error:", error);
        showMessage(signInMsg, getAuthErrorMessage(error), "error");
      } finally {
        setLoadingState(loginBtn, false, "Sign In");
      }
    });
  }

} catch (error) {
  console.error("Firebase initialization error:", error);
  const errorElement = document.getElementById('signInMsg') || document.getElementById('signUpMsg');
  if (errorElement) {
    showMessage(errorElement, "System error. Please refresh the page or try again later.", "error");
  }
}


// ==================== EMPLOYER REGISTER ====================
const employerRegisterForm = document.getElementById('employer-register-form');
if (employerRegisterForm) {
  employerRegisterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('employer_email').value.trim();
    const password = document.getElementById('employer_password').value;
    const confirmPassword = document.getElementById('employer_confirm_password').value;
    const signUpMsg = document.getElementById('employerSignUpMsg');
    const signUpBtn = document.getElementById('employer_register-btn-id');

    resetMessage(signUpMsg);

    if (!email || !password || !confirmPassword) {
      showMessage(signUpMsg, "All fields are required", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage(signUpMsg, "Passwords do not match", "error");
      return;
    }

    if (password.length < 6) {
      showMessage(signUpMsg, "Password must be at least 6 characters", "error");
      return;
    }

    setLoadingState(signUpBtn, true, "Creating account...");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showMessage(signUpMsg, "Employer registration successful! Redirecting...", "success");
      employerRegisterForm.reset();

      setTimeout(() => {
       window.location.href = "/regiter/adminDashboard.html";
      }, 1500);
    } catch (error) {
      console.error("Employer Registration Error:", error);
      showMessage(signUpMsg, getAuthErrorMessage(error), "error");
    } finally {
      setLoadingState(signUpBtn, false, "Register");
    }
  });
}

// ==================== EMPLOYER LOGIN ====================
const employerLoginForm = document.getElementById('employer-login-form');
if (employerLoginForm) {
  employerLoginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('employer_login_email').value.trim();
    const password = document.getElementById('employer_login_password').value;
    const signInMsg = document.getElementById('employerSignInMsg');
    const loginBtn = document.getElementById('employer_login-btn-id');

    resetMessage(signInMsg);

    if (!email || !password) {
      showMessage(signInMsg, "Email and password are required", "error");
      return;
    }

    setLoadingState(loginBtn, true, "Signing in...");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage(signInMsg, "Login successful! Redirecting...", "success");

      setTimeout(() => {
        // window.location.href = "/regiter/adminDashboard.html";
        window.location.href = "/regiter/adminDashboard.html";
      }, 1500);

    } catch (error) {
      console.error("Employer Login Error:", error);
      showMessage(signInMsg, getAuthErrorMessage(error), "error");
    } finally {
      setLoadingState(loginBtn, false, "Login");
    }
  });

 let currentUserEmail = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUserEmail = user.email;
    loggedInUserDiv.textContent = `👋 Welcome, ${currentUserEmail}`;
    
  } else {
    loggedInUserDiv.textContent = "Not logged in";
  }
   renderJobs();
});


}
