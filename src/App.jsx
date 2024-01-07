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
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Refresh from "./pages/connection/Refresh";
import { Suspense } from "react";
import MainProjects from "project/AppProjects";
import AppCommunication from "communication/AppCommunication";
import SpecsApp from "specs/SpecsApp";
import Verify from "./pages/connection/Verify";
import ForgotPassword from "./pages/connection/ForgotPassword";
import NewPassword from "./pages/connection/NewPassword";
import VerifyEmail from "./pages/connection/VerifyEmail";
import useLoading from "./atom/loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<AuthLayout />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="verify" element={<Verify />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="new-password" element={<NewPassword />} />
      <Route path="verify-email" element={<VerifyEmail />} />
      <Route path="refresh" element={<Refresh />} />


      <Route path="root-layout" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="board"
          element={
            <Suspense fallback={<Refresh />}>
              {" "}
              <MainProjects />
            </Suspense>
          }
        />
        <Route path="specs">{SpecsApp}</Route>
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

function App() {

  const [loading, setLoading] = useLoading()

  return loading ? <Refresh /> : <RouterProvider router={router} />;
}

export default App;
