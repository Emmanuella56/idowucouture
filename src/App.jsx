import React from 'react'
import {createBrowserRouter,  Route,  RouterProvider, createRoutesFromElements} from 'react-router-dom'
import ShopCollection  from './Components/Content/Pages/ShopCollection.jsx'
import ContactUs from './Components/Footer/ContactUs.jsx'
import Home from './Components/Content/Pages/Home.jsx'
import './App.css'
import SignUp from './Components/Content/Pages/SignUp.jsx'
import SignIn from './Components/Content/Pages/SignIn.jsx'
// import ShopNow from './Components/Content/Pages/ShopNow.jsx'
import NoPage   from './Components/Content/Pages/NoPage.jsx'
import Layout from './Layout/Layout.jsx'
// import Login from "./Components/Content/Pages/Login.jsx"
import DisplayAfterSignUp from './Components/Content/Pages/DisplayAfterSignUp.jsx'
import AuthLayout from './Components/Content/Pages/Login.jsx'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<SignIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="displayafterlogin" element={<DisplayAfterSignUp  />}/>
        </Route>
        <Route path='shopcollection' element={<ShopCollection/>}/>
        <Route path="contact" element={<ContactUs />}/>
        
        <Route path="*" element={<NoPage />}/>
    </Route>
    )
  )

  return (

    <>

      <RouterProvider router={router}/>
        
       
   

    </>

     )
}

export default App
