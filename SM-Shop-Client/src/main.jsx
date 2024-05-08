import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPages from './pages/MainPages';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages/>,
    children: [
      {
        path:'/',
        element:<Home/>
      }
    ],
    errorElement:<p>Error Page 404</p>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
