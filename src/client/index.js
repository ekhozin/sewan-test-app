import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import humps from 'humps';

import { API_BASE_URL } from '@/config';

/**
 * Response interceptors
 */
const httpLink = new HttpLink({ uri: API_BASE_URL });

const addDateLink = new ApolloLink((operation, forward) =>
    forward(operation).map((response) => {
        response.data = humps.camelizeKeys(response.data);
        return response;
    }),
);

/**
 * Create client instance
 */
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: addDateLink.concat(httpLink),
    defaultOptions: {
        query: {
            errorPolicy: 'all',
        },
    },
});

export { client };
