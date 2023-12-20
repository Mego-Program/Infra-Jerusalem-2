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
import { useNavigate } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import useUserDetails from "./atom/userAtom";
import axios from "axios";
import Refresh from "./pages/connection/Refresh";
import { Suspense } from "react";
import MainProjects from "project/AppProjects";
import AppCommunication from "communication/AppCommunication";
import SpecsApp from "specs/SpecsApp";
import Verify from "./pages/connection/Verify";

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
        <Route index element={<Dashboard />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<SignIn />} />
        <Route path="board" element={<SignIn />} />
        <Route path="add-user" element={<SignIn />} />
        <Route path="messages" element={<SignIn />} />
        <Route path="settings" element={<SignIn />} />

        {/* Change route behavior for "info" */}
        <Route path="info" element={<SignIn />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {


  return (
    <RouterProvider
    router={router}
    />
  );
}

export default App;