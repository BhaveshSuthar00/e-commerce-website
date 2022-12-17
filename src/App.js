import React, { useEffect } from 'react';
import AllRoutes from './AllRoutes/AllRoutes';
import { jwt, setHeaderToken } from './common/constants';
import Navbar from './components/Navbar/Navbar';
import { apiCallGetData } from './Redux/Data/Data';
function App() {
  useEffect(() => {
    if(jwt()) {
      setHeaderToken(jwt());
    }
  }, []);
  return (
    <>
      <Navbar />
      <AllRoutes /> 
    </>
  );
}

export default App;
