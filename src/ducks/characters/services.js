import { gql } from '@apollo/client';

import { client } from '@/client';

/**
 * Requests API to get character's information by id.
 * @param {string|number} id Character's id.
 * @returns {
 *      Promise<{
 *          data: {
 *              character: {
 *                  {
 *                      id: string,
 *                      name: string,
 *                      status: string,
 *                      gender: string,
 *                      species: string
 *                  }
 *              }
 *          }
 *      }>
 * }
 */
function fetchCharacter(id) {
    return client.query({
        query: gql`
            query {
                character(id: ${id}) {
                    id,
                    name,
                    status,
                    gender,
                    species
                }
            }
        `,
    });
}

export { fetchCharacter };
