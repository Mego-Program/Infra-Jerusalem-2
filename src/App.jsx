import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import UserNotifications from "./Components/UserNotifications";
import SearchInput from "./Components/SearchInput";
import SignIn from "./Components/SignIn";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="dashboard" element={<Header />}></Route>
        <Route index element={<SignUp />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
