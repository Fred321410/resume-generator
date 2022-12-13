import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.scss';
import Users from './pages/users/Users';
import Resumes from './pages/resumes/Resumes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  createHttpLink,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import omitDeep from 'omit-deep-lodash';
import { OperationDefinitionNode } from 'graphql';

library.add(fas);

const cleanTypenameLink = new ApolloLink((operation, forward) => {
  const keysToOmit = ['__typename'];
  const def = getMainDefinition(operation.query) as OperationDefinitionNode;
  if (def && def.operation === 'mutation') {
    operation.variables = omitDeep(operation.variables, keysToOmit);
  }
  return forward ? forward(operation) : null;
});

const httpLink = createHttpLink({ uri: 'http://localhost:3001/graphql' });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([cleanTypenameLink, httpLink]),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Users />,
      },
      {
        path: '/resumes',
        element: <Resumes />,
      },
      {
        path: '/*',
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
  </React.StrictMode>
);
