import {Router as initRouter} from 'express';
import {Router, Request, Response} from 'express-serve-static-core';

export class NodesRoutes {
    private router: Router = initRouter();

    public configure(): Router {
        this.router.get('/', (req: Request, res: Response) => {
            res.status(200).send(`Hello World!`);
        });

        this.router.get('/:id', (req: Request, res: Response) => {
            res.status(200).send(`Hello World!`);
        });

        return this.router
    }
}
