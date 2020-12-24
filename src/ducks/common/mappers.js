import { DEFAULT_PAGINATION, EMPTY_OBJECT } from '@/constants';

const mapPagination = ({
    next = DEFAULT_PAGINATION.next,
    prev = DEFAULT_PAGINATION.prev,
    pages = DEFAULT_PAGINATION.pages,
} = EMPTY_OBJECT) => ({
    next,
    prev,
    pages,
});

export { mapPagination };
