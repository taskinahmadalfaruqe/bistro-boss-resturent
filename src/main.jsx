import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import Rousts from './Routes/Rousts';
import './index.css'
import AuthProvider from './Provider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Rousts} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
