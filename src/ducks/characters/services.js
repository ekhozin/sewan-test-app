import { gql } from '@apollo/client';

import { client } from '@/client';

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
