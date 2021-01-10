import express from 'express';
import winston from 'winston';
import bodyparser from 'body-parser';
import cors from 'cors';
import expressWinston from 'express-winston';
import NodesRoutes from '../nodes/nodes.routes';

/**
 * Create an Express.JS Server.
 * @returns {express.Application} server that is configured and initialized.
 */
export default function createServer(): express.Application {
  const app: express.Application = express();
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

  return app;
}
