import { initContract } from '@ts-rest/core';
import z from 'zod';
import { zCategory } from '../types';

const c = initContract();

const zgetCategoryListRes = z.object({
  status: z.literal('OK'),
  data: z.array(zCategory),
});

const zgetCategoryByIdRes = z.object({
  status: z.literal('OK'),
  data: zCategory,
});

export const qwisRoutes = {
  routes: c.router({
    getCategoryList: {
      method: 'GET',
      path: '/categories',
      responses: {
        200: zgetCategoryListRes,
      },
      summary: 'List categories',
    },
    getCategoryById: {
      method: 'GET',
      path: '/category/:categoryId',
      pathParams: z.object({
        categoryId: z.number(),
      }),
      responses: {
        200: zgetCategoryByIdRes,
      },
      summary: 'Get Category',
    },
  }),
};
