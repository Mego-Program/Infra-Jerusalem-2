import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Dashboard from "./pages/mainMenu/Dashboard";
import AddUser from "./pages/mainMenu/AddUser";
import Settings from "./pages/mainMenu/Settings";
import Info from "./pages/mainMenu/Info";
import NotFound from "./pages/mainMenu/NotFound";
import SignIn from "./pages/connection/SignIn";
import SignUp from "./pages/connection/SignUp";
import { useState, useEffect, useLayoutEffect, startTransition } from "react";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import useUserDetails from "./atom/userAtom";
import axios from "axios";
import Refresh from "./pages/connection/Refresh";
import { Suspense } from "react";
import MainProjects from "project/AppProjects";
import AppCommunication from "communication/AppCommunication";
import SpecsApp from "specs/SpecsApp";


// import MainProjects  from "project/AppProjects"; // cahnge to appProject
// import AppCommunication from "communication/AppCommunication";
// import SpecsApp from "specs/SpecsApp"

import {Cloudinary} from "@cloudinary/url-gen";

const defaultRouter = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<Refresh />} />)
);
// Creating a router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<AuthLayout />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="verify" element={<Verify />} />

      <Route path="root-layout" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="projects"
          element={
            <Suspense fallback={<Refresh />}>
              {" "}
              <MainProjects />
            </Suspense>
          }
        />
        <Route path="board">{SpecsApp}</Route>
        <Route path="add-user" element={<AddUser />} />
        <Route
          path="messages"
          element={
            <ErrorBoundary fallback={<Refresh />}>
              <AppCommunication />
            </ErrorBoundary>
          }
        />
        <Route path="settings" element={<Settings />} />
        <Route path="info" element={<Info />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const invalidRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<AuthLayout />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="verify" element={<Verify />} />

      <Route path="root-layout" element={<SignIn />}>
        <Route index element={<SignIn />} />

        <Route path="dashboard" element={<SignIn />} />
        <Route path="projects" element={<SignIn />} />
        <Route path="board" element={<SignIn />} />
        <Route path="add-user" element={<SignIn />} />
        <Route path="messages" element={<SignIn />} />
        <Route path="settings" element={<SignIn />} />
        <Route path="info" element={<SignIn />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

async function getUserDetails() {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "https://infra-jerusalem-2-server.vercel.app/userDetails",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("no token");
    }
  } catch (error) {
    console.log(error);
  }
}
function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'dne5dplkd'}});
  const [userDetails, setUserDetails] = useUserDetails();
  const [loading, setLoading] = useState(true);

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get(
        "https://infra-jerusalem-2-server.vercel.app/userDetails",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        setUserDetails(response.data);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    fetchUserDetails();
  }, []);

  if (loading) {
    return;
  }


  return (
    <RouterProvider
      router={userDetails ? router : invalidRouter}
    />
  );
}

export default App;