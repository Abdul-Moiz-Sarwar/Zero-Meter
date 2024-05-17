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
import DealerProfilePage from './pages/DealerProfilePage';
import ViewDealerAnalyticsPage from './pages/DealerAnalyticsPage'; 

//Blogs (User and Dealer)
import Blogs from './pages/Blogs';
import IndividualBlogPage from './pages/IndividualBlogPage'; 
import blog1 from './pages/images/blog1.png';
import blog2 from './pages/images/blog2.jpg';
import blog3 from './pages/images/blog3.jpg';

// Vehicles
import ViewVehiclesPage from './pages/VehiclesPage';
import VehicleFormComponent from './pages/VehicleFormComponent';
import VehicleDetails from './pages/VehicleDetails';
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
import UserAdListPage from './pages/UserAdListPage';

//Payment
import PaymentPage from './pages/PaymentPage';


//User Profile
import UserProfilePage from './pages/UserProfilePage';
import EditUserProfilePage from './pages/EditUserProfilePage';
import profile1 from './pages/images/profile.png'

//Dealer List/Details
import DealerService from './pages/DealerService';
import DealerListPage from './pages/DealerListPage';
import DealerDetailsPage from './pages/DealerDetailsPage';
import dealer1 from './pages/images/crowley.jpg';
import dealer2 from './pages/images/toyota.png';

//Admin Blog
import AdminBlogs from './pages/AdminBlogs';
import AdminIndividualBlogPage from './pages/AdminIndividualBlogPage';
import AdminIndividualBlogEditPage from './pages/AdminIndividualBlogEditPage';

//Admin Ads
import AdminAdListPage from './pages/AdminAdListPage';
import AdminAdDetailPage from './pages/AdminAdDetailPage';

//Admin Analytics
import analytic1 from './pages/images/analytics1.png'
import analytic2 from './pages/images/analytics2.png';
import analytic3 from './pages/images/analytics3.png';
import AdminAnalyticsPage from './pages/AdminAnalyticsPage';
import MainAdminPage from './pages/MainAdminPage';

//Admin View Dealers Page
import AdminDealerListPage from './pages/AdminDealerListPage';
import AdminDealerDetailsPage from './pages/AdminDealerDetailsPage';

function App() {

  // const role="admin";
  /*
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from backend
    const fetchUserData = async () => {
        try {
            const response = await fetch('http://localhost:3000/accounts/getUser', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Bearer ${localStorage.getItem('token')}
                }
            });
            const userData = await response.json();
            setUser(userData.user);
            console.log(userData);

            // Check if user data includes the role field
            if (userData.user && userData.user.type) {
                setRole(userData.user.type);
                console.log("User type:", userData.user.type); // Log user type here
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    fetchUserData();
}, []);*/



  const [vehicles, setVehicles] = useState([
    {
        id: 1,
        title: 'Vehicle 1',
        image: image1,
        price: '$10,000',
        specifications: {
            type: 'Car',
            company: 'Toyota',
            model: 'Corolla',
            variant: 'GLi',
            modelYear: '2022',
            engineSize: '1.6L',
            horsePower: '120hp',
            color: 'Black',
            mileage: '25,000 km',
            transmission: 'Automatic',
            topSpeed: '180 km/h',
            rating: '4.5/5'
        }
    },
    {
      id: 2,
      title: 'Tuscan 2024',
      image: image2,
      price: '$30,000',
      specifications: {
          type: 'Car',
          company: 'Toyota',
          model: 'Corolla',
          variant: 'GLi',
          modelYear: '2022',
          engineSize: '1.6L',
          horsePower: '120hp',
          color: 'Black',
          mileage: '25,000 km',
          transmission: 'Automatic',
          topSpeed: '180 km/h',
          rating: '4.5/5'
      }
  },
  {
      id: 3,
      title: 'Ford Ranger',
      image: image3,
      price: '$30,000',
      specifications: {
          type: 'Car',
          company: 'Toyota',
          model: 'Corolla',
          variant: 'GLi',
          modelYear: '2022',
          engineSize: '1.6L',
          horsePower: '120hp',
          color: 'Black',
          mileage: '25,000 km',
          transmission: 'Automatic',
          topSpeed: '180 km/h',
          rating: '4.5/5'
      }
  },
    // Add more vehicles as needed
  ]);

  const [ads, setAds] = useState([
    {
      id: 1,
      title: 'Ad 1',
      description: 'Description of Ad 1',
      imageUrl: ad1,
      startDate: '2024-05-01',
      endDate: '2024-05-10'
    },
    {
      id: 2,
      title: 'Ad 2',
      description: 'Description of Ad 2',
      imageUrl: ad2,
      startDate: '2024-05-05',
      endDate: '2024-05-15'
    },
    {
      id: 3,
      title: 'Ad 3',
      description: 'Description of Ad 3',
      imageUrl: ad3,
      startDate: '2024-05-05',
      endDate: '2024-05-15'
    },
    // Add more ads as needed
  ]);

  const invoices = [
    {
      id: 1,
      date: '2024-05-01',
      amount: '$1000',
      description: 'Invoice for Car Model A'
    },
    {
      id: 2,
      date: '2024-05-05',
      amount: '$1500',
      description: 'Invoice for Car Model B'
    },
    {
      id: 3,
      date: '2024-05-10',
      amount: '$2000',
      description: 'Invoice for Car Model C'
    }
  ];  

  const [blogs, setBlogs] = useState([
    { 
      id: 1, 
      title: 'Are New Cars Worth Buying?', 
      author: 'John Doe', 
      date: 'May 1, 2024', 
      summary: 'In this post, we evaluate the pros and cons of buying new cars than second-hand ones. Find out more!',
      image: blog1,
      content: `
        <p>Hello Readers!</p>
        <p>There are some amazing new cars in Pakistan, and today we will be looking into the top 5 of them, so gear up to join us on this journey! Authored by John Doe, this thought-provoking piece navigates through the myriad of considerations that consumers face when contemplating a new automobile purchase. Through a balanced analysis of factors such as depreciation rates, warranty coverage, and technological advancements, the article aims to equip readers with the knowledge necessary to make informed decisions. By exploring both the advantages and drawbacks of opting for a new vehicle over a used alternative, the narrative provides readers with a comprehensive overview of the new car market. With its insightful commentary and pragmatic approach, "Are New Cars Worth Buying?" serves as an indispensable guide for individuals navigating the complex terrain of automotive purchasing.</p>
        <p>Happy Buying!</p>
      `,
    },
    { 
        id: 2, 
        title: 'Top 5 New Cars In Pakistan', 
        author: 'Jane Smith', 
        date: 'May 5, 2024', 
        summary: 'Find out all about the top 5 new cars trending in Pakistan. Read more to know all details!',
        image: blog2, 
        content: `
        <p>Hello Readers!</p>
        <p>There are some amazing new cars in Pakistan, and today we will be looking into the top 5 of them, so gear up to join us on this journey! Authored by John Doe, this thought-provoking piece navigates through the myriad of considerations that consumers face when contemplating a new automobile purchase. Through a balanced analysis of factors such as depreciation rates, warranty coverage, and technological advancements, the article aims to equip readers with the knowledge necessary to make informed decisions. By exploring both the advantages and drawbacks of opting for a new vehicle over a used alternative, the narrative provides readers with a comprehensive overview of the new car market. With its insightful commentary and pragmatic approach, "Are New Cars Worth Buying?" serves as an indispensable guide for individuals navigating the complex terrain of automotive purchasing.</p>
        <p>Happy Buying!</p>
      `,
      }, { 
        id: 3, 
        title: 'Upcoming Electric Cars of Tomorrow', 
        author: 'Jane Smith', 
        date: 'May 15, 2024', 
        summary: 'Dive into a world of electric cars as we discuss all about it in this article!',
        image: blog3, 
        content: `
        <p>Hello Readers!</p>
        <p>There are some amazing new cars in Pakistan, and today we will be looking into the top 5 of them, so gear up to join us on this journey! Authored by John Doe, this thought-provoking piece navigates through the myriad of considerations that consumers face when contemplating a new automobile purchase. Through a balanced analysis of factors such as depreciation rates, warranty coverage, and technological advancements, the article aims to equip readers with the knowledge necessary to make informed decisions. By exploring both the advantages and drawbacks of opting for a new vehicle over a used alternative, the narrative provides readers with a comprehensive overview of the new car market. With its insightful commentary and pragmatic approach, "Are New Cars Worth Buying?" serves as an indispensable guide for individuals navigating the complex terrain of automotive purchasing.</p>
        <p>Happy Buying!</p>
      `,
    },
  ]);

  const userData = {
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


  const handleSaveAd = (formData, id) => {
    if (id) {
      const updatedAds = ads.map(ad => (ad.id === id ? { ...ad, ...formData } : ad));
      setAds(updatedAds);
    } else {
      const newAd = { id: ads.length + 1, ...formData };
      setAds([...ads, newAd]);
    }
  };


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


  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const handleSaveBlog = (formData, id) => {
    const updatedBlogs = blogs.map(blog => (blog.id === id ? { ...blog, ...formData } : blog));
    setBlogs(updatedBlogs);
  };

  const handleSaveVehicle = (formData) => {
    const updatedVehicles = [...vehicles];
    // Check if the vehicle already exists
    const index = updatedVehicles.findIndex(vehicle => vehicle.id === formData.id);
    if (index !== -1) {
        // If exists, update it
        updatedVehicles[index] = formData;
    } else {
        // If doesn't exist, add it
        formData.id = updatedVehicles.length + 1;
        updatedVehicles.push(formData);
    }
    setVehicles(updatedVehicles);
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
        <DealerService>
        <Routes>

          {/*Basic Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<IndividualBlogPage blogs={blogs} />} /> 
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<LogIn />} />  

          {/*Vehicles */}   
          <Route path="/vehicles" element={<ViewVehiclesPage role={role} />} /> 
          <Route path="/vehicles/add" element={<VehicleFormComponent vehicles={vehicles} />} />
          <Route path="/vehicles/edit/:id" element={<VehicleFormComponent vehicles={vehicles} onSubmit={handleSaveVehicle}/>} />
          <Route path="/vehicles/:id" element={<VehicleDetails vehicles={vehicles} onSubmit={handleSaveVehicle}/>} />

          {/*Dealer Pages */}
          <Route path="/invoices" element={<ViewInvoicesPage />} />
          <Route path="/invoices/:id" element={<DetailInvoicePage invoices={invoices} />} />
          <Route path="/dealerprofile" element={<DealerProfilePage />} />
          <Route path="/dealer-analytics" element={<ViewDealerAnalyticsPage />} />
          <Route path="/ads" element={<AdListPage />} />
          <Route path="/ads/:id" element={<AdDetailPage ads={ads} />} />
          <Route path="/ads/edit/:id" element={<AdEditPage ads={ads} onSave={handleSaveAd} />} />
          <Route path="/ads/edit/new" element={<AdEditPage ads={ads} onSave={handleSaveAd} />} />
        
         
          {/*User Pages */}
          <Route path="/userads" element={<UserAdListPage />} />
          <Route path="/userads/:id" element={<AdDetailPage ads={ads} />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/edit-profile" element={<EditUserProfilePage userData={userData} />} />
          <Route path="/dealers" element={<DealerListPage dealers={dealers} />} />
          <Route path="/dealer/:id" element={<DealerDetailsPage dealers={dealers}/>} />

          {/*Admin Pages */}
          <Route path="/admin/blogs" element={<AdminBlogs blogs={blogs} onDelete={handleDeleteBlog} onSave={handleSaveBlog}  />} />
          <Route path="/admin/blogs/add" element={<AdminIndividualBlogEditPage blogs={blogs} onSave={handleSaveBlog} />} />
          <Route path="/admin/blogs/:id/edit" element={<AdminIndividualBlogEditPage blogs={blogs} onSave={handleSaveBlog} />} />
          <Route path="/admin/blogs/:id" element={<AdminIndividualBlogPage blogs={blogs} onDelete={handleDeleteBlog} />} />
          <Route path="/admin/ads" element={<AdminAdListPage />} />
          <Route path="/admin/ads/:id" element={<AdminAdDetailPage ads={ads} />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage analytics={analytics}/>}/>
          <Route path="/admin/dealers" element={<AdminDealerListPage dealers={dealers} />} />
          <Route path="/admin/dealers/:id" element={<AdminDealerDetailsPage dealers={dealers}/>} />

        </Routes>
        </DealerService>
        <Footer />
      </div>
    </Router>
  );
}

export default App;