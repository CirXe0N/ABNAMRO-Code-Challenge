import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import winston from 'winston';
import expressWinston from 'express-winston';
import NodesRoutes from './nodes/nodes.routes';

// Initialize Express.JS
const app: express.Application = express();
const port: number = 8000;
const winstonOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
};

// Setup Middleware for Express.JS
app.use(bodyparser.json());
app.use(cors());
app.use(expressWinston.logger(winstonOptions));
app.use(expressWinston.errorLogger(winstonOptions));

// Define Routes for Express.JS
app.use('/api/v1/nodes', new NodesRoutes().configure());

// Start Express.JS
app.listen(port, () => {
  console.info(`⚡️[server]: Server is running at http://127.0.0.1:${port}`);
});
