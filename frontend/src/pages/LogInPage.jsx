import React from 'react';
import LoginForm from './LogInComponent';

const LoginPage = ({ setRole }) => {
  return (
    <div className='p-5 bg-light'>
      <h1>Login</h1>
      <LoginForm setRole={setRole} />
    </div>
  );
}

export default LoginPage;