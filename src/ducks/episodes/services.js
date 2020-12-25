import { gql } from '@apollo/client';

import { client } from '@/client';

/**
 * Requests API to get list if episodes.
 * @param {page} params.id Character's id.
 * @param {string} params.search Search parameter.
 * @returns {
 *      Promise<{
 *          data: {
 *              episodes: {
 *                  info: {
 *                     next,
 *                      prev,
 *                      pages
 *                  },
 *                  results: {
 *                      id: string,
 *                      name: string,
 *                      airDate: string,
 *                      episode: string,
 *                      characters: { id: string, name: string }[]
 *                  }[]
 *              }
 *          }
 *      }>
 * }
 */
function fetchEpisodes(params) {
    const search = params?.search || '';
    const page = params?.page || 1;

    return client.query({
        query: gql`
            query {
                episodes(page: ${page}, filter: { name: "${search}" } ) {
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

/**
 * Requests API to get episode's information by id.
 * @param {string|number} id Episode's id.
 * @returns {
 *      Promise<{
 *          data: {
 *              episode: {
 *                  {
 *                      id: string,
 *                      name: string,
 *                      airDate: string,
 *                      episode: string,
 *                      characters: { id: string, name: string }[]
 *                  }
 *              }
 *          }
 *      }>
 * }
 */
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
