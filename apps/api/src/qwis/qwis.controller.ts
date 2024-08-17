import {
  Controller,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { QwisService } from './qwis.service';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { API } from '@qwis/ts-rest';
import { error } from 'console';

@Controller()
export class QwisController {
  constructor(private readonly qwisService: QwisService) {}

  @TsRestHandler(API.User.getUserList)
  async getUserList() {
    return tsRestHandler(API.User.getUserList, async () => {
      const userList = await this.qwisService.getUserList();
      if (!userList) {
        throw new Error('User List not Found');
      }
      return {
        status: 200,
        body: {
          status: 'OK',
          data: userList,
        },
      };
    });
  }

  @TsRestHandler(API.User.createUser)
  async createUser() {
    return tsRestHandler(API.User.createUser, async ({ body }) => {
      const user = await this.qwisService.createUser(body);
      if (!user) {
        throw new error('Something went wrong while creating user');
      }
      return {
        status: 201,
        body: {
          status: 'OK',
          data: user,
        },
      };
    });
  }

  @TsRestHandler(API.Qwis.getCategoryList)
  async getCategoryList() {
    return tsRestHandler(API.Qwis.getCategoryList, async () => {
      const categoryList = await this.qwisService.getCategoryList();
      if (!categoryList) {
        throw new error('Something went wrong while getting category list');
      }
      return {
        status: 200,
        body: {
          status: 'OK',
          data: categoryList,
        },
      };
    });
  }

  @TsRestHandler(API.Qwis.getCategoryById)
  async getCategoryById() {
    return tsRestHandler(API.Qwis.getCategoryById, async ({ params }) => {
      const categoryObj = await this.qwisService.getCategoryById(
        params.categoryId,
      );
      if (!categoryObj) {
        throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND);
      }
      return {
        status: 200,
        body: {
          status: 'OK',
          data: categoryObj,
        },
      };
    });
  }
}
