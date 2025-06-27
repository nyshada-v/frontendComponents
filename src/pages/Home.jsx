import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; // Make sure styles for .mission-card and hover effects are here

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="text-center py-5"
        style={{
          background: 'linear-gradient(to right, #e0f2ff, #e6fff2)',
          minHeight: '60vh',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">
            Creating <span className="text-success">Hope</span> for Tomorrow
          </h1>
          <p className="lead mt-3 mb-4">
            Join us in making a difference. Together, we can build stronger communities, provide education, and create lasting change for those who need it most.
          </p>
          <div className="mb-4">
            <Link to="/signup" className="btn btn-primary me-2">Get Involved</Link>
            <Link to="/programs" className="btn btn-outline-secondary">Learn More</Link>
          </div>
          <div className="d-flex justify-content-center gap-4 text-muted mt-3">
            <div><strong>50K+</strong> Lives Impacted</div>
            <div><strong>25+</strong> Countries</div>
            <div><strong>100+</strong> Projects</div>
          </div>
        </div>
      </section>

      {/* Mission Areas */}
      <section className="text-center py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Our Mission Areas</h2>
          <p className="text-muted mb-5">
            We focus on three core areas to create sustainable impact in communities worldwide
          </p>

          <div className="row justify-content-center">
            {/* Education */}
            <div className="col-md-4 mb-4">
              <div className="mission-card border p-4 rounded bg-light h-100 transition">
                <div className="icon-circle bg-primary text-white mb-3">
                  <i className="bi bi-mortarboard fs-3"></i>
                </div>
                <h5 className="fw-bold text-primary">Education</h5>
                <p className="text-muted small">
                  Providing quality education and learning opportunities to underserved communities.
                </p>
              </div>
            </div>

            {/* Healthcare */}
            <div className="col-md-4 mb-4">
              <div className="mission-card border p-4 rounded bg-light h-100 transition">
                <div className="icon-circle bg-success text-white mb-3">
                  <i className="bi bi-heart-pulse fs-3"></i>
                </div>
                <h5 className="fw-bold text-success">Healthcare</h5>
                <p className="text-muted small">
                  Delivering essential healthcare services and promoting wellness in remote areas.
                </p>
              </div>
            </div>

            {/* Environment */}
            <div className="col-md-4 mb-4">
              <div className="mission-card border p-4 rounded bg-light h-100 transition">
                <div className="icon-circle" style={{ backgroundColor: '#a259ff', color: 'white' }}>
                  <i className="bi bi-globe2 fs-3"></i>
                </div>
                <h5 className="fw-bold" style={{ color: '#a259ff' }}>Environment</h5>
                <p className="text-muted small">
                  Protecting the planet through sustainable practices and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 text-white" style={{ background: 'linear-gradient(to right, #0575E6, #00F260)' }}>
        <h2>Ready to Make a Difference?</h2>
        <p className="mb-4">Your contribution can create ripples of positive change. Join us today.</p>
        <Link to="/volunteer" className="btn btn-light me-2">Start Volunteering</Link>
        <Link to="/donate" className="btn btn-outline-light">Make a Donation</Link>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container d-flex justify-content-between flex-wrap">
          <div>
            <h5>HopeForward</h5>
            <p className="text-muted small">Creating lasting change through compassion, education, and action.</p>
          </div>
          <div>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/programs" className="text-white text-decoration-none">Programs</Link></li>
              <li><Link to="/news" className="text-white text-decoration-none">News</Link></li>
            </ul>
          </div>
          <div>
            <h6>Contact</h6>
            <p className="text-muted small">📞 +1 (555) 123-4567<br />
              📧 info@hopeforward.org<br />
              📍 123 Hope Street, City</p>
          </div>
        </div>
        <div className="text-center text-muted small mt-3">© 2024 HopeForward NGO. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
