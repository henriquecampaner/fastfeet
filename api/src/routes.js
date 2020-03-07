import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/Controllers/UserController';
import SessionController from './app/Controllers/SessionController';
import RecipientController from './app/Controllers/RecipientController';
import DeliverymanController from './app/Controllers/DeliverymanController';
import OrderController from './app/Controllers/OrderController';
import FileController from './app/Controllers/FileController';
import DeliveriesController from './app/Controllers/DeliveriesController';
import DeliveredOrderController from './app/Controllers/DeliveredOrderController';
import DeliveryProblemController from './app/Controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/orders/problems/list', DeliveryProblemController.index);
routes.post('/orders/problems', DeliveryProblemController.store);
routes.get('/orders/:orderId/problems', DeliveryProblemController.show);

routes.get('/deliveryman/:id/deliveredorders', DeliveredOrderController.index);
routes.put('/deliveryman/:id/deliveredorders', DeliveredOrderController.update);

routes.get('/deliveryman/:id/deliveries', DeliveriesController.index);
routes.put('/deliveryman/:id/deliveries', DeliveriesController.update);

routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.show);

routes.get('/deliveryman/:id', DeliverymanController.show);
routes.get('/deliveryman/', DeliverymanController.index);

routes.get('/recipients/:id', RecipientController.show);
routes.get('/recipients/', RecipientController.index);

/** Private Routes */
routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.destroy);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.destroy);

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);

routes.get('/orders/:orderId/problems', DeliveryProblemController.show);
routes.delete(
  '/problem/:orderId/cancel-delivery',
  DeliveryProblemController.destroy
);

export default routes;
