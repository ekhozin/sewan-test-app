import React from 'react';
import PropTypes from 'prop-types';

import { Characters, Character } from './styles';

function EpisodeCardCharacters(props) {
    const { characters, onCharacterClick } = props;

    return (
        <Characters>
            {characters.map((character) => (
                <Character key={character.id} onClick={() => onCharacterClick(character.id)}>
                    {character.name}
                    {','}
                </Character>
            ))}
        </Characters>
    );
}

EpisodeCardCharacters.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired }),
    ),
    onCharacterClick: PropTypes.func.isRequired,
};

const memoized = React.memo(EpisodeCardCharacters);

export { memoized as EpisodeCardCharacters };
