import * as fs from 'fs'
import * as https from 'https'
import * as express from 'express'
import * as jsonServer from 'json-server'
import { handleAuthentication } from './auth'
import { handleAuthorization } from './authz'

 
const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/login', handleAuthentication);
server.use('/orders', handleAuthorization);

// Use default router
server.use(router);

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem', 'utf8'),
  key: fs.readFileSync('./backend/keys/key.pem', 'utf8')
}

https.createServer(options, server)
     .listen(3001, () => {
       console.log('JSON Server is running on https://localhost:3001')
      });