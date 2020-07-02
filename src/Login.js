import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
require('dotenv').config();

const handleSuccess = (res) => {
  console.log('Sucess', res);
};

const handleFailure = (res) => {
  console.log('something went wrong', res);
};

const Login = () => {
  
  return (
    <div>
      {/* TODO: Login Logic */}
    </div>
  );
};

export default Login;
