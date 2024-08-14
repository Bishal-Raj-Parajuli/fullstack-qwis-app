import { initContract } from '@ts-rest/core';
import { userRoutes } from './routes/user.routes';
import { qwisRoutes } from './routes/qwis.routes';

export const API = initContract().router({
  User: userRoutes.routes,
  Qwis: qwisRoutes.routes,
});
