import axios from 'axios';

import { API_BASE_URL } from '@/config';
import * as requestInterceptors from './request-interceptors';
import * as responseInterceptors from './response-interceptors';
import { paramsSerializer } from './helpers';

const request = axios.create({ baseURL: API_BASE_URL, paramsSerializer });

/**
 * apply request interceptors
 */
request.interceptors.request.use(requestInterceptors.requestMapper);

/**
 * apply response interceptors
 */
request.interceptors.response.use(
    responseInterceptors.responseMapper,
    responseInterceptors.errorHandler,
);

export { request };
