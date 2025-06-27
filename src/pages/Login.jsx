import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { auth } from '../firebase/config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  }; */

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Link to="/" className="mb-3 text-decoration-none">&larr; Back to Home</Link>
      <div className="shadow p-4 rounded" style={{ width: '100%', maxWidth: '400px' }}>
        {/* Logo */}
        <div className="text-center mb-3">
          <div
            style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(to right, #0575E6, #00F260)',
              borderRadius: '50%',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>💙</span>
          </div>
        </div>

        {/* Welcome Text */}
        <h4 className="text-center mb-3">Welcome Back</h4>
        <p className="text-center text-muted mb-4">Sign in to your HopeForward account</p>

        {/* Google Sign-in */}
        <button className="btn btn-outline-secondary w-100 mb-2">
          <i className="bi bi-google me-2"></i> Continue with Google
        </button>

        <div className="text-center text-muted my-2" style={{ fontSize: '14px' }}>OR CONTINUE WITH EMAIL</div>

        {/* Login Form */}
        <form>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control bg-light"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-light"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="#" className="text-decoration-none" style={{ fontSize: '14px' }}>Forgot password?</Link>
          </div>

          <button className="btn btn-success w-100 mb-3">Sign In</button>
        </form>

        <p className="text-center text-muted" style={{ fontSize: '14px' }}>
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>

      {/* Footer Note */}
      <p className="text-muted text-center mt-3" style={{ fontSize: '13px' }}>
        Trusted by 50,000+ volunteers worldwide<br />
        <span className="text-secondary" style={{ fontSize: '11px' }}>
          🔒 SSL Secured &nbsp; ✓ GDPR Compliant &nbsp; 🔐 Privacy Protected
        </span>
      </p>
    </div>
  );
}

export default Login;
