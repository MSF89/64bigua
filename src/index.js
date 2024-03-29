import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css';
import Layout from './Layout';
import Tour from './Components/Tour';
import Infotour from './Components/Infotour';
import TerminalService from './Components/TerminalService'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Tour/>,
      },
      {
        path:'/:tourid',
        element: <Infotour/>
      },
      {
        path:'/terminalservice',
        element: <TerminalService/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

