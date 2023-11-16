import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {  HelmetProvider } from 'react-helmet-async'
import Rousts from './Routes/Rousts';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={Rousts} />
    </HelmetProvider>
  </React.StrictMode>,
)
