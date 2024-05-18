import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './pages/SignUpPage';
import LogIn from './pages/LogInPage';

//Basic Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LandingPage from './pages/landingpage';

//Dealer Profile Page
import DealerProfilePage from './pages/DealerProfilePage';
import ViewDealerAnalyticsPage from './extra/DealerAnalyticsPage'; 

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

//Ads
import ad1 from './pages/images/ad1.jpg';
import ad2 from './pages/images/ad2.jpg';
import ad3 from './pages/images/ad3.jpg';
import AdListPage from './pages/AdListPage';
import AdDetailPage from './pages/AdDetailPage';
import AdEditPage from './pages/AdEditPage';

//Payment
import PaymentPage from './pages/PaymentPage';

//User Profile
import UserProfilePage from './pages/UserProfilePage';
import EditUserProfilePage from './pages/EditUserProfilePage';
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
import UserDetail from './pages/UserDetails';
import profil1 from './pages/images/profile.png';
import profile2 from './pages/images/woman.png';
import profile3 from './pages/images/profile3.png';

//Checkout Page
import CheckoutPage from './pages/CheckoutPage';


function App() {


  const userDat = {
    avatar: profile1, // Placeholder image URL
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Street, City, Country',
  };

  const dealers = [
    {
      id: 1,
      name: 'Crowley Motorss',
      email: 'dealer1@example.com',
      address: '123 Street, City, Country',
      image: dealer1,
    },
    {
      id: 2,
      name: 'Toyota',
      email: 'dealer2@example.com',
      address: '456 Street, City, Country',
      image: dealer2,
    },
    // Add more dummy dealers as needed
  ];

  const [userData, setUserData] = useState([
    {
      id: 1,
      avatar: profile1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      avatar: profile2,
      name: 'Casie Ford',
      email: 'casieford@example.com',
      phone: '524-456-7890',
    },
    {
      id: 3,
      avatar: profile3,
      name: 'Alexa Mercedes',
      email: 'alexa@example.com',
      phone: '533-986-4522',
    },
  ]);

  const analytics = [
    {
      image: analytic1,
      sales: 1000,
      profit: 500,
      reach: '10,000'
    },
    {
      image: analytic2,
      sales: 1500,
      profit: 700,
      reach: '15,000'
    },
    {
      image: analytic3,
      sales: 2000,
      profit: 1000,
      reach: '20,000'
    }
  ];


  const handleDeleteUser = (id) => {
    const updatedUsers = userData.filter(user => user.id !== id);
    setUserData(updatedUsers);
  };

  const [role, setRole] = useState('');
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
  },[]);

  
  return (
    <Router>
      <div className="App">
        <Navbar />
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

          {/*View all Dealers*/}
          <Route path="/dealers" element={<DealerListPage dealers={dealers} role={role} />} />
          <Route path="/dealer/:id" element={<DealerDetailsPage dealers={dealers}/>} />

          {/*Ads
          <Route path="/ads/edit/:id" element={<AdEditPage  />} />
          <Route path="/ads/edit/add" element={<AdEditPage  />} />    
          */}
          <Route path="/ads" element={<AdListPage role={role}/>} />
          <Route path="/ads/:id" element={<AdDetailPage role={role}/>} />


          {/*Analytics */}          
          <Route path="/analytics" element={<AnalyticsPage analytics={analytics}/>}/>

          <Route path="/dealerprofile" element={<DealerProfilePage />} />
         
          {/*User Pages */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/edit-profile" element={<EditUserProfilePage userDat={userDat} />} />

          {/*User Lists */}
          <Route path="/userlist" element={<UserList userData={userData} onDelete={handleDeleteUser} />} />
          <Route path="/userlist/:id" element={<UserDetail userData={userData} />} />

          {/*Checkout           */}
            <Route path="/checkout" element={<CheckoutPage />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;