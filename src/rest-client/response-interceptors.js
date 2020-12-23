import humps from 'humps';

export function responseMapper(response) {
    return Promise.resolve(humps.camelizeKeys(response.data));
}

// TODO: handle errors
export function errorHandler(response) {
    return Promise.reject(response);
}
