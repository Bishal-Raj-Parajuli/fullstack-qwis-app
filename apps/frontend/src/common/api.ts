import { API } from '@qwis/ts-rest';
import { initClient } from '@ts-rest/core';

class APIClient {
  public api = initClient(
    { ...API },
    {
      baseUrl: import.meta.env.VITE_API_URL,
      baseHeaders: {},
    },
  );
}

export const apiClient = new APIClient();
