import {Router as initRouter} from 'express';
import {Router, Request, Response} from 'express-serve-static-core';
import {Node} from './nodes.model';

export class NodesRoutes {
    private router: Router = initRouter();

    public configure(): Router {
        this.router.get('/', (req: Request, res: Response) => {
           Node.retrieveAll()
                .then((items) => {
                    items.toJson().then((items) => {
                        res.status(200).send(items);
                    })
                })
        });

        this.router.get('/:id', (req: Request, res: Response) => {
            res.status(200).send(`Hello World!`);
        });

        return this.router
    }
}
