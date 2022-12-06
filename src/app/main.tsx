import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.scss';
import Users from './pages/users/Users';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Header from './components/Header/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
