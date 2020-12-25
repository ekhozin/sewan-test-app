import { DEFAULT_PAGINATION } from '@/constants';

/**
 * Maps pagination from API response to redux state
 * @param {{ next: number|null, prev: number|null, pages: number }} pagination
 * @returns {{ next: number|null, prev: number|null, pages: number }}
 */
const mapPagination = (pagination) => ({
    next: pagination?.next || DEFAULT_PAGINATION.next,
    prev: pagination?.prev || DEFAULT_PAGINATION.prev,
    pages: pagination?.pages || DEFAULT_PAGINATION.pages,
});

export { mapPagination };
