import React from 'react';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './components/Navbar/Navbar';
// https://e-commerce-port.herokuapp.com/
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes /> 
    </>
  );
}

export default App;
