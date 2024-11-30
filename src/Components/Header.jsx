import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBrain, FaEnvelope, FaHome, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-gray-700">
        <Container>
          <Navbar.Brand href="#home" className="font-semibold text-white font-mono d-flex align-items-center">
            <FaBrain className="me-2" size={28} />
            Big Five Personality
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'white', borderColor: 'white' }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* Home */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                  color: '#fff',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/"
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: 'none' }}
                >
                  <FaHome className="me-2" /> Home
                </NavLink>
              </motion.div>

              {/* About */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                  color: '#fff',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/about"
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: 'none' }}
                >
                  <FaInfoCircle className="me-2" /> About the test
                </NavLink>
              </motion.div>

              {/* Take the Test */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                  color: '#fff',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/"
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: 'none' }}
                >
                  Take the test
                  <FaArrowRight className="ms-2" />
                </NavLink>
              </motion.div>

              {/* Login */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                  color: '#fff',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/login" // Correct path
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: 'none' }}
                >
                  <FaSignInAlt className="me-2" /> Login
                </NavLink>
              </motion.div>

              {/* Contact */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  background: 'linear-gradient(90deg, #43cea2, #185a9d)',
                  color: '#fff',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className="rounded"
              >
                <NavLink
                  to="/contact"
                  className="text-white d-flex justify-content-center align-items-center rounded px-3 py-2"
                  style={{ textDecoration: 'none' }}
                >
                  <FaEnvelope className="me-2" />
                  Contact Us
                </NavLink>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
