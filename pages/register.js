import React from 'react';


import Register from '../components/register/Register';

const register = () => {
  return (
    <did>
      <Register />  
    </did>
  );
};

export default register;

register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
