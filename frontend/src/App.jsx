// src/App.js
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const stripePromise = loadStripe('pk_test_51PID9PDEA9oSjm91oQXX3VMn2amZW3iJW0gGgmhNkXy6Y3ei3mw2EWhGRk1Pkq1KopGZb9Kl6OUZhTw519HA3W6g00rhripHNv');

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SignUp from './pages/SignUpPage';
import LogIn from './pages/LogInPage';

// Basic Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/landingpage';

// Blogs
import IndividualBlogPage from './pages/IndividualBlogPage';
import Blogs from './pages/Blogs';
import BlogForm from './pages/BlogForm';

// Vehicles
import ViewVehiclesPage from './pages/VehiclesPage';
import VehicleDetails from './pages/VehicleDetails';
import VehicleForm from './pages/VehicleForm';

// Invoice
import ViewInvoicesPage from './pages/ViewInvoicesPage';
import DetailInvoicePage from './pages/DetailInvoicePage';
import PayInvoicePage from './pages/PayInvoicePage';

// Ads
import AdListPage from './pages/AdListPage';
import AdDetailPage from './pages/AdDetailPage';
import AdEditPage from './pages/AdEditPage';

// Payment
import PaymentPage from './pages/PaymentPage';

// Dealer List/Details
import DealerListPage from './pages/DealerListPage';
import DealerDetailsPage from './pages/DealerDetailsPage';

// Admin Analytics
import AnalyticsPage from './pages/AnalyticsPage';

// User List
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';

// Checkout Page
import CheckoutPage from './pages/CheckoutPage';

// User Profile
import ProfilePage from './pages/ProfilePage';

function App() {
  const [role, setRole] = useState('none');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/accounts/getUser', { withCredentials: true });
        setRole(res.data.user.type);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        <Navbar role={role} setRole={setRole} />
        <div className="d-flex bg-light flex-grow-1">
          <Sidebar role={role} isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
          <div className="flex-grow-1 p-3">
            <button onClick={toggleSidebar} className="d-flex btn btn-dark justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
              {isSidebarVisible ? <FaTimes /> : <FaArrowRight/>}
            </button>
            <Routes>
              {/* Basic Pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/signup" element={<SignUp setRole={setRole} />} />
              <Route path="/login" element={<LogIn setRole={setRole} />} />

              {/* Vehicles */}
              <Route path="/vehicles" element={<ViewVehiclesPage role={role} />} />
              <Route path="/vehicles/add" element={<VehicleForm role={role} />} />
              <Route path="/vehicles/edit/:id" element={<VehicleForm role={role} />} />
              <Route path="/vehicles/:id" element={<VehicleDetails role={role} />} />

              {/* Blogs */}
              <Route path="/blogs" element={<Blogs role={role} />} />
              <Route path="/blogs/add" element={<BlogForm />} />
              <Route path="/blogs/edit/:id" element={<BlogForm />} />
              <Route path="/blogs/:id" element={<IndividualBlogPage role={role} />} />

              {/* Invoices */}
              <Route path="/invoices" element={<ViewInvoicesPage role={role}/>} />
              <Route path="/invoices/:id" element={<DetailInvoicePage role={role}/>} />
              <Route path="/invoices/pay" element={<Elements stripe={stripePromise}><PayInvoicePage/></Elements>} />

              {/* Dealers */}
              <Route path="/dealers" element={<DealerListPage role={role} />} />
              <Route path="/dealer/:id" element={<DealerDetailsPage />} />

              {/* Ads */}
              <Route path="/ads" element={<AdListPage role={role} />} />
              <Route path="/ads/:id" element={<AdDetailPage role={role} />} />

              {/* Analytics */}
              <Route path="/analytics" element={<AnalyticsPage />} />

              {/* Payment */}
              <Route path="/payment" element={<PaymentPage />} />

              {/* Checkout */}
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* User Profile */}
              <Route path="/profile" element={<ProfilePage />} />

              {/* User List */}
              <Route path="/userlist" element={<UserList />} />
              <Route path="/user-details" element={<UserDetails />}/>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
