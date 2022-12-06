import express from 'express';
import router from './lib/router';
import cors from 'cors';
import initApolloServer from './lib/graph'

const { PORT = 3001 } = process.env;
// Construct a schema, using GraphQL schema language

const app = express();

initApolloServer(app);

app.use(cors());

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
/*app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});*/


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

