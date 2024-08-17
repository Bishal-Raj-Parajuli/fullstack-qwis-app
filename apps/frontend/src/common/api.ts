import { API } from '@qwis/ts-rest';
import { initClient } from '@ts-rest/core';

class APIClient {
  public api = initClient(
    { ...API },
    {
      baseUrl: 'http://localhost:3001',
      baseHeaders: {},
    },
  );
}

export const apiClient = new APIClient();
