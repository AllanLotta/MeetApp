import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ msg: 'gg izi' }));

export default routes;
