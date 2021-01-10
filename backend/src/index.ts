import createServer from './expressjs/expressjs.server';

// Start Express.JS
const port: number = 8000;
createServer().listen(port, () => {
  console.info(`⚡️[server]: Server is running at http://127.0.0.1:${port}`);
});
