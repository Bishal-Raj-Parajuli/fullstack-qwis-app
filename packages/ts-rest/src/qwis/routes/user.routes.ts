import { initContract } from '@ts-rest/core';
import z from 'zod';
import { zUser } from '../types';

const c = initContract();

const zgetUserListRes = z.object({
  status: z.literal('OK'),
  data: z.array(zUser),
});

const zcreateUserReq = z.object({
  userName: z.string(),
  totalPoint: z.number().default(0),
  country: z.string(),
});

const zcreateUserRes = z.object({
  status: z.literal('OK'),
  data: zUser,
});

const zUpdateUserRes = z.object({
  status: z.literal('OK'),
  data: zUser,
})

const zUpdateUserReq = z.object({
  totalPoint: z.number()
})

export const userRoutes = {
  routes: c.router({
    getUserList: {
      method: 'GET',
      path: '/user',
      responses: {
        200: zgetUserListRes,
      },
      summary: 'Get list of users',
    },
    createUser: {
      method: 'POST',
      path: '/user',
      body: zcreateUserReq,
      responses: {
        201: zcreateUserRes,
      },
      summary: 'Create user',
    },
    updateUser: {
      method: 'PUT',
      path: '/user/:userId',
      pathParams: z.object({
        userId: z.coerce.number()
      }),
      body: zUpdateUserReq,
      responses: {
        200: zUpdateUserRes
      }
    }
  }),
};
