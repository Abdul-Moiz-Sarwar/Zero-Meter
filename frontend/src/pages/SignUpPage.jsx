import React from 'react';
import SignUpForm from './SignUpComponent';

const SignUpPage = ({ setRole }) => {
  return (
    <div className='p-5 bg-light'>
      <h1>Signup</h1>
      <SignUpForm setRole={setRole} />
    </div>
  );
}

export default SignUpPage;