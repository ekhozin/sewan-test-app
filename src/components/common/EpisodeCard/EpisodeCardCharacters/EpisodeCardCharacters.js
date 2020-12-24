import React from 'react';
import PropTypes from 'prop-types';

import { Characters, Character } from './styles';

const EpisodeCardCharacters = ({ characters }) => (
    <Characters>
        {characters.map(({ link, name }) => (
            <Character key={link} to={link}>
                {name}
                {','}
            </Character>
        ))}
    </Characters>
);

EpisodeCardCharacters.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string.isRequired, link: PropTypes.string.isRequired }),
    ),
};

const memoized = React.memo(EpisodeCardCharacters);

export { memoized as EpisodeCardCharacters };
