import { qsStringify } from '@/utils/qs';

const paramsSerializer = (params) =>
    qsStringify(params, {
        filter: (prefix, value) => {
            if (prefix === 'sort') {
                return { [`${value.sort_by}`]: value.sort_dir };
            }

            return value;
        },
    });

export { paramsSerializer };
