import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import IndividualBlogPage from './pages/IndividualBlogPage'; 
import Footer from './components/Footer';
import LandingPage from './pages/landingpage';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUpPage';
import LogIn from './pages/LogInPage';
import DealerProfilePage from './pages/DealerProfilePage';
import ViewVehiclesPage from './pages/ViewVehicles';
import DetailVehiclePage from './pages/VehicleDetails'; // Import DetailVehiclePage
import ViewInvoicesPage from './pages/ViewInvoicesPage'; // Import ViewInvoicesPage
import DetailInvoicePage from './pages/DetailInvoicePage'; // Import DetailInvoicePage
import ViewDealerAnalyticsPage from './pages/DealerAnalyticsPage'; // Import ViewDealerAnalyticsPage
import image1 from './pages/images/civic.jpg';
import image2 from './pages/images/Tuscon.jpg';
import image3 from './pages/images/fordcar.jpg';
import blog1 from './pages/images/blog1.png';
import blog2 from './pages/images/blog2.jpg';
import blog3 from './pages/images/blog3.jpg';
//Ads
import ad1 from './pages/images/ad1.jpg';
import ad2 from './pages/images/ad2.jpg';
import ad3 from './pages/images/ad3.jpg';
import AdListPage from './pages/AdListPage';
import AdDetailPage from './pages/AdDetailPage'; // Import the AdDetailPage component
import AdEditPage from './pages/AdEditPage'; // Import the AdEditPage component

const vehicles = [
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
];


function App() {

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

  const blogs = [
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


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<IndividualBlogPage blogs={blogs} />} /> 
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/signup" element={<SignUp />} /> 
           <Route path="/login" element={<LogIn />} />     
          <Route path="/dealerprofile" element={<DealerProfilePage />} /> 
          <Route path="/vehicles" element={<ViewVehiclesPage />} /> 
          <Route path="/vehicles/:id" element={<DetailVehiclePage vehicles={vehicles} />} /> {/* Update route */}
          <Route path="/invoices" element={<ViewInvoicesPage />} />
          <Route path="/invoices/:id" element={<DetailInvoicePage invoices={invoices} />} />
          <Route path="/dealer-analytics" element={<ViewDealerAnalyticsPage />} />
          <Route path="/ads" element={<AdListPage />} />
          <Route path="/ads/:id" element={<AdDetailPage ads={ads} />} />
         <Route path="/ads/edit/:id" element={<AdEditPage ads={ads} onSave={handleSaveAd} />} />
          <Route path="/ads/edit/new" element={<AdEditPage ads={ads} onSave={handleSaveAd} />} />*
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;