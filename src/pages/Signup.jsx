import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import {auth,googleauthprovider} from "../firebase/config";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate(); 
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/main');
    } catch (error) {
      console.error(error.message);
    }
  }; 

  const handleSignupwithGoogle=async (e)=>{
    try{
            await  signInWithPopup(auth,googleauthprovider);
            navigate('/main');
        }catch(err){
            console.error(err);
        }
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Link to="/" className="mb-3 text-decoration-none">&larr; Back to Home</Link>
      <div className="shadow p-4 rounded" style={{ width: '100%', maxWidth: '450px' }}>
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

        <h4 className="text-center mb-3">Join HopeForward</h4>
        <p className="text-center text-muted mb-4">Create your account to start making a difference</p>

        <button className="btn btn-outline-secondary w-100 mb-2" onClick={handleSignupwithGoogle}>
          <i className="bi bi-google me-2"></i> Continue with Google
        </button>

        <div className="text-center text-muted my-2" style={{ fontSize: '14px' }}>OR CONTINUE WITH EMAIL</div>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Enter your full name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control bg-light"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-light"
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control bg-light"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button className="btn btn-primary w-100 mb-3" disabled={!agreed} onClick={handleSignup}>
            Create Account
          </button>
        </form>

        <p className="text-center text-muted" style={{ fontSize: '14px' }}>
          Already have an account? <Link to="/login">Sign in</Link>
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

export default Signup;
