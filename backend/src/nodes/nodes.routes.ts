import { Router as initRouter } from 'express';
import { Router, Request, Response } from 'express-serve-static-core';
import Node from './nodes.model';

export default class NodesRoutes {
  private router: Router = initRouter();

  /**
   * Configure the routes for the nodes endpoint.
   * @returns {Router} router with configured routes.
   */
  public configure(): Router {
    this.router.get('/', (req: Request, res: Response) => {
      Node.retrieveAll()
        .then((nodes) => {
          nodes.toJson().then((items) => {
            res.status(200).send(items);
          });
        });
    });

    return this.router;
  }
}
