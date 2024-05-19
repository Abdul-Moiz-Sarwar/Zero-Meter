import SignUpForm from './SignUpComponent'; // Import your SignUpForm component
import React, { useRef, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';


const SignUpPage = () => {
    

    return (
        <div className='p-5 bg-light'>
            <h1>Signup</h1>
            <SignUpForm />
        </div>
    );
    
}

export default SignUpPage;
