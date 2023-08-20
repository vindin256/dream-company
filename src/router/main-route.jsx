import React from 'react';
import { Route, Routes } from "react-router";
import Home from "../page/home";
import Login from '../page/login';
import { createBrowserRouter } from 'react-router-dom';
import axios from "axios";
import image1 from  "./../assets/images/images.jpg"
const Main = () => {
    return (
        <>
      <h1>Welcome</h1>
        <Routes>
            <Route path="/" Component={Home} loader={async () => {
                await axios.get("https://catfact.ninja/fact").then(res => {return res.data.fact }).catch((err => { console.log(err) }))
            }} />
            <Route path='/login' Component={Login} />

        </Routes>
        </>
    )
}
export default Main;
