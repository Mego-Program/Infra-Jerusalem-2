import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

// Dynamic import function for MainProjects
export function DynamicMainProjects() {
  return DynamicImport(() => import("project/AppProjects"));
}

// Dynamic import function for AppCommunication
export function DynamicAppCommunication() {
  return DynamicImport(() => import("communication/AppCommunication"));
}

// Dynamic import function for SpecsApp
export function DynamicSpecsApp() {
  return DynamicImport(() => import("specs/SpecsApp"));
}

// Generic dynamic import component
function DynamicImport(loader) {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loader()
      .then(mod => setComponent(mod.default))
      .catch(err => setError(err));
  }, [loader]);

  if (error) {
    return <Alert severity="error">Failed to load component: {error.message}</Alert>;
  }

  return Component ? <Component /> : <div>Loading...</div>;
}






























//_________________________________________________________










// import Alert from '@mui/material/Alert';


// // Dynamically import MainProjects
// async function loadMainProjects() {
//     try {
//         const MainProjects = await import("project/AppProjects");
//         return MainProjects;
//     } catch (error) {
//         console.error("Failed to load MainProjects:", error.message);
//         <Alert severity="error">Failed to load MainProjects:!</Alert>
//     }
// }

// // Dynamically import AppCommunication
// async function loadAppCommunication() {
//     try {
//         const AppCommunication = await import("communication/AppCommunication");
//         return AppCommunication;
//     } catch (error) {
//         console.error("Failed to load AppCommunication:", error.message);
//         <Alert severity="error">Failed to load AppCommunication:!</Alert>
//     }
// }

// // Dynamically import AppCommunication
// async function loadSpecsApp() {
//     try {
//         const SpecsApp = await import("specs/SpecsApp");
//         return SpecsApp;
//     } catch (error) {
//         console.error("Failed to load SpecsApp:", error.message);
//         <Alert severity="error">Failed to load SpecsApp:!</Alert>
//     }
// }

// // Example usage
// async function init() {
//     const mainProjects = await loadMainProjects();
//     const appCommunication = await loadAppCommunication();
//     const SpecsApp = await loadSpecsApp();

//     // Your code here using mainProjects and appCommunication
// }

// init();
