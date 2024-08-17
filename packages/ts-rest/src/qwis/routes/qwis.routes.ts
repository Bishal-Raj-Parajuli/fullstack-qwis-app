import { initContract } from '@ts-rest/core';
import z, { number } from 'zod';
import { zCategory, zOption, zQuestion } from '../types';

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
      path: '/category',
      responses: {
        200: zgetCategoryListRes,
      },
      summary: 'List categories',
    },
    getCategoryById: {
      method: 'GET',
      path: '/category/:categoryId',
      pathParams: z.object({
        categoryId: z.coerce.number(),
      }),
      responses: {
        200: zgetCategoryByIdRes,
      },
      summary: 'Get Category',
    },
    getQuestionListByCategoryId: {
      method: 'GET',
      path: '/:categoryId/question',
      pathParams: z.object({ 
        categoryId: z.coerce.number()
      }),
      responses: {
        200: z.object({
          data: z.array(zQuestion)
        }) 
      },
      summary: 'Get question List by category Id',
    },
    getOptionByQuestioId: {
      method: 'GET',
      path: '/:questionId/options',
      pathParams: z.object({
        questionId: z.coerce.number()
      }),
      responses: {
        200: z.object({
          data: z.array(zOption)
        })
      },
      summary: 'Get option by Question Id',
    }
  }),
};
