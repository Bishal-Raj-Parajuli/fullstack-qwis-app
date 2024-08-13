import { Controller } from '@nestjs/common';
import { QwisService } from './qwis.service';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { API } from '@qwis/ts-rest';

@Controller('qwis')
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
      console.log(userList);
    });
  }
}
