import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Importing pages
import Dashboard from "./pages/mainMenu/Dashboard";
import Projects from "./pages/mainMenu/Projects";// delete
import Board from "./pages/mainMenu/Board";
import AddUser from "./pages/mainMenu/AddUser";
import Messages from "./pages/mainMenu/Messages";
import Settings from "./pages/mainMenu/Settings";
import Info from "./pages/mainMenu/Info";
import NotFound from "./pages/mainMenu/NotFound";
import SignIn from "./pages/connection/SignIn";
import SignUp from "./pages/connection/SignUp";
import { useState, useEffect, useLayoutEffect } from "react";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import useUserDetails from "./atom/userAtom";
import axios from "axios";
import  Refresh  from "./pages/connection/Refresh";

import MainProjects  from "project/AppProjects"; // cahnge to appProject
// import AppCommunication from "communication/AppCommunication";
import SpecsApp from "../../Jlm-Specs-2-main/src/SpecsApp"



const defaultRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<Refresh />} />)
);
// Creating a router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* Routes for authentication */}
      <Route index element={<AuthLayout />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />

      {/* Routes for the main application with RootLayout */}

      <Route path="root-layout" element={<RootLayout />}>
        {/* Default route for the main application */}
        <Route index element={<Dashboard />} />

        {/* Individual routes for each main menu item */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<MainProjects/>} />
        <Route path="board" element={<SpecsApp />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="info" element={<Info />} />
      </Route>


      {/* 404 Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const invalidRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* Routes for authentication */}
      <Route index element={<AuthLayout />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />

      {/* Routes for the main application with RootLayout */}

      <Route path="root-layout" element={<RootLayout />}>
        {/* Default route for the main application */}
        <Route index element={<Dashboard />} />

        {/* Individual routes for each main menu item */}
        <Route path="dashboard" element={<SignIn />} />
        <Route path="projects" element={<MainProjects />} />
        <Route path="board" element={<SpecsApp />} />
        <Route path="add-user" element={<SignIn />} />
        <Route path="messages" element={<SignIn />} />
        <Route path="settings" element={<SignIn />} />
        <Route path="info" element={<SignIn />} />
      </Route>

      {/* 404 Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);


async function getUserDetails(){
  try{
    const token = localStorage.getItem('token')
    
    const response = await axios.get(
      "http://localhost:3000/userDetails"
      ,{
      headers:{
        Authorization:token
      }

    });
    console.log(response);


    if (response.status === 200){
      

    return response.data}
    else{
      console.log('no token');

    }
  }
  catch(error){
    
    console.log(error);

  }
}


// Main App component that provides the router
function App() {
  const [userDetails, setUserDetails] = useUserDetails();
  const [token,setTokenProvided] = useState(false)
  useLayoutEffect(()=>{
    const fetchUserDetails = async()=>{
      const data = await getUserDetails();
      if(data.status !== 200){
        setTokenProvided(false)
      }
      console.log(data);

      setTokenProvided(true)


      setUserDetails(data)
      

    }
    fetchUserDetails()
  },[])

  return (
    <RouterProvider
      router={token ? router : token === false ? invalidRouter : defaultRouter}
    />
  );
}

export default App;
