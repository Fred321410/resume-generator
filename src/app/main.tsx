import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './App';
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
        element: <App />,
      },
      {
        path: "/foo",
        element: <App />,
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
