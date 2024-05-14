import React from 'react';
import SignUpForm from './SignUpComponent'; // Import your SignUpForm component

const SignUpPage = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Welcome to the Sign Up Page</h1>
                    <p className="text-center">Please fill out the form below to create an account.</p>
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
