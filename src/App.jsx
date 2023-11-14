import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Importing pages
import Dashboard from "./pages/mainMenu/Dashboard";
import Projects from "./pages/mainMenu/Projects";
import Board from "./pages/mainMenu/Board";
import AddUser from "./pages/mainMenu/AddUser";
import Messages from "./pages/mainMenu/Messages";
import Settings from "./pages/mainMenu/Settings";
import Info from "./pages/mainMenu/Info";
import NotFound from "./pages/mainMenu/NotFound";
import SignIn from "./pages/connection/SignIn";
import SignUp from "./pages/connection/SignUp";

 
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";

// Creating a router using react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* Routes for authentication */}
      <Route index element={<AuthLayout />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />

      {/* Routes for the main application with RootLayout */}
      <Route path="rootLayout" element={<RootLayout />}>
        {/* Default route for the main application */}
        <Route index element={<Dashboard />} />
        
        {/* Individual routes for each main menu item */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="board" element={<Board />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="info" element={<Info />} />
      </Route>

      {/* 404 Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// Main App component that provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;
