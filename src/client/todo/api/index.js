import axios from 'axios';

import config from '@configuration';

import { isBrowser } from '@shared/utils/frontend';

import { API } from './constants';

class Api {
  static fetchTodo() {
    const url = isBrowser()
      ? API.TODO
      : `${config.baseUrl}/${API.TODO}`;

    return axios(url);
  }
}

export default Api;
