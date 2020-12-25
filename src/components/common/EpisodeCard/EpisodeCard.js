import React from 'react';
import PropTypes from 'prop-types';

import texts from '@/texts';
import { EpisodeCardCharacters } from './EpisodeCardCharacters';
import {
    Container,
    MainInfo,
    CardTitle,
    Name,
    Date,
    AdditionalInfo,
    CharactersTitle,
} from './styles';

/**
 * React component.
 * Renders EpisodeCard.
 */
function EpisodeCard(props) {
    const { name, airDate, characters, link } = props;

    return (
        <Container>
            <MainInfo>
                <CardTitle>
                    <Name to={link}>{name}</Name>
                </CardTitle>
                <div>
                    {`${texts.episodeAirDate}:`}
                    <Date>{airDate}</Date>
                </div>
            </MainInfo>
            <AdditionalInfo>
                <CharactersTitle>{`${texts.characters}:`}</CharactersTitle>
                <EpisodeCardCharacters characters={characters} />
            </AdditionalInfo>
        </Container>
    );
}

EpisodeCard.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    airDate: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};

const memoized = React.memo(EpisodeCard);

export { memoized as EpisodeCard };
