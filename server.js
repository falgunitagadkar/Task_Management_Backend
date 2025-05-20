const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Use the PORT provided by Render or fallback to 3000
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});