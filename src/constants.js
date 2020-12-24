const DEFAULT_PAGINATION = {
    next: 2,
    prev: null,
    pages: 1,
};

/**
 * PAGE ROUTES
 */
const ROUTES = {
    HOME: '/',
    CHARACTER: '/characters/:id',
    EPISODE: '/episodes/:id',
};

/**
 * COMMON
 */
const EMPTY_ARRAY = [];
const EMPTY_OBJECT = {};
const EMPTY_STRING = '';

export { ROUTES, EMPTY_ARRAY, EMPTY_OBJECT, DEFAULT_PAGINATION, EMPTY_STRING };
