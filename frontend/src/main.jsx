import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Layout from './Layout.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Addexpense from './components/Addexpense/Addexpense.jsx'
import Manageexpense from './components/Manageexpense/Manageexpense.jsx'
import Changepassword from './components/Changepassword/Changepassword.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='contact-us' element={<Contact/>} />
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='addExpense' element={<Addexpense/>}/> 
      <Route path='manageExpense' element={<Manageexpense/>}/>
      <Route path='changePassword' element={<Changepassword/>}/> 
     </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
