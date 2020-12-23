import qs from 'qs';

const qsStringify = (params, config = {}) => qs.stringify(params, config);

export { qsStringify };
