import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './pages/SignUpPage';
import LogIn from './pages/LogInPage';

//Basic Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/landingpage';

//Blogs 
import IndividualBlogPage from './pages/IndividualBlogPage'; 
import Blogs from './pages/Blogs';
import BlogForm from './pages/BlogForm';
import blog1 from './pages/images/blog1.png';
import blog2 from './pages/images/blog2.jpg';
import blog3 from './pages/images/blog3.jpg';

// Vehicles
import ViewVehiclesPage from './pages/VehiclesPage';
import VehicleDetails from './pages/VehicleDetails';
import VehicleForm from './pages/VehicleForm';
import image1 from './pages/images/civic.jpg';
import image2 from './pages/images/Tuscon.jpg';
import image3 from './pages/images/fordcar.jpg';

//Invoice
import ViewInvoicesPage from './pages/ViewInvoicesPage'; 
import DetailInvoicePage from './pages/DetailInvoicePage'; 
import PayInvoicePage from './pages/PayInvoicePage';

//Ads
import ad1 from './pages/images/ad1.jpg';
import ad2 from './pages/images/ad2.jpg';
import ad3 from './pages/images/ad3.jpg';
import AdListPage from './pages/AdListPage';
import AdDetailPage from './pages/AdDetailPage';
import AdEditPage from './pages/AdEditPage';

//Payment
import PaymentPage from './pages/PaymentPage';

import profile1 from './pages/images/profile.png'

//Dealer List/Details
import DealerListPage from './pages/DealerListPage';
import DealerDetailsPage from './pages/DealerDetailsPage';
import dealer1 from './pages/images/crowley.jpg';
import dealer2 from './pages/images/toyota.png';

//Admin Analytics
import analytic1 from './pages/images/analytics1.png'
import analytic2 from './pages/images/analytics2.png';
import analytic3 from './pages/images/analytics3.png';
import AnalyticsPage from './pages/AnalyticsPage';

//User List
import UserList from './pages/UserList';
import UserDetail from './extra/UserDetails';
import profil1 from './pages/images/profile.png';
import profile2 from './pages/images/woman.png';
import profile3 from './pages/images/profile3.png';

//Checkout Page
import CheckoutPage from './pages/CheckoutPage';

//User Profile
import ProfilePage from './pages/ProfilePage'; 
import oldSidebar from './components/oldSidebar';
//SideBar
import Sidebar from './components/Sidebar';

function App() {

  const stripekey = 'sk_test_51PID9PDEA9oSjm91LA1IW8K0vQWxi0NaFxp5bvs7Z4DLu60vmImZX5bIlBbdz9RQmbw6l8NHYl3iMhhjQZ6G9BHd00BDy2CWl7'

  const [role, setRole] = useState('none');
  useEffect(() =>{
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/accounts/getUser', { withCredentials: true });
        setRole(res.data.user.type);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser()
  },[role]);

  return (
    <Router>
    <div className="App" style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar /> 
      {/* Content Wrapper */}
      <div className="content-wrapper" style={{ flex: 1 }}>
        <Navbar role={role}/>
        <Routes>

          {/*Basic Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<LogIn />} />  

          {/*Vehicles */}   
          <Route path="/vehicles" element={<ViewVehiclesPage role={role} />} /> 
          <Route path="/vehicles/add" element={<VehicleForm role={role} />} />
          <Route path="/vehicles/edit/:id" element={<VehicleForm role={role} />} />
          <Route path="/vehicles/:id" element={<VehicleDetails role={role} />} />

          {/*Blogs */}
          <Route path="/blogs" element={<Blogs role={role} />} />
          <Route path="/blogs/add" element={<BlogForm />} />
          <Route path="/blogs/edit/:id" element={<BlogForm />} />     
          <Route path="/blogs/:id" element={<IndividualBlogPage role={role} />} />

          {/*Invoices */}
          <Route path="/invoices" element={<ViewInvoicesPage />} />
          <Route path="/invoices/:id" element={<DetailInvoicePage />} />
          <Route path="/invoices/pay" element={<PayInvoicePage />} />

          {/*View all Dealers*/}

          <Route path="/dealers" element={<DealerListPage role={role} />} />
          <Route path="/dealer/:id" element={<DealerDetailsPage />} />

          {/*Ads
          <Route path="/ads/edit/:id" element={<AdEditPage  />} />
          <Route path="/ads/edit/add" element={<AdEditPage  />} />    
          */}
          <Route path="/ads" element={<AdListPage role={role}/>} />
          <Route path="/ads/:id" element={<AdDetailPage role={role}/>} />


          {/*Analytics */}          
          <Route path="/analytics" element={<AnalyticsPage />}/>
         
          {/*Payment */}
          <Route path="/payment" element={<PaymentPage />} />

          {/*User Lists 
          <Route path="/userlist" element={<UserList userData={userData} onDelete={handleDeleteUser} />} />
          <Route path="/userlist/:id" element={<UserDetail userData={userData} />} />
          */}

          {/*Checkout           */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/*User/Dealer Profile */}
          <Route path="/profile" element={<ProfilePage role={role}/>}></Route>
        </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;