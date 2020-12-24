import { gql } from '@apollo/client';

import { client } from '@/client';

function fetchEpisodes({ page = 1 } = {}) {
    return client.query({
        query: gql`
            query {
                episodes(page: ${page}) {
                    info {
                        next,
                        prev,
                        pages
                    }
                    results {
                        id,
                        name,
                        air_date,
                        episode,
                        characters {
                            id,
                            name
                        }
                    }
                }
            }
        `,
    });
}

function fetchEpisode(id) {
    return client.query({
        query: gql`
            query {
                episode(id: ${id}) {
                    id,
                    name,
                    air_date,
                    episode,
                    characters {
                        id,
                        name
                    }
                }
            }
        `,
    });
}

export { fetchEpisodes, fetchEpisode };
