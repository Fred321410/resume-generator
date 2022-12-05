import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.scss';
import Users from './pages/users/Users';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/*",
        element: <div>Error</div>,
      },
    ],
  },
]);

const domContainer = document.querySelector('#root');
if (!domContainer) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
