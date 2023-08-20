import React, { useRef, useState } from 'react';
import { Outlet, } from 'react-router-dom';
import AddItem from './add-item';



const Home = () => {
   

   return (<>
          <Outlet />
   </>)
}

export default Home;