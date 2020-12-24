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

function EpisodeCard(props) {
    const { id, name, date, characters, onCharacterClick, onEpisodeClick } = props;

    const handleEpisodeClick = () => onEpisodeClick(id);

    return (
        <Container>
            <MainInfo>
                <CardTitle>
                    <Name onClick={handleEpisodeClick}>{name}</Name>
                </CardTitle>
                <div>
                    {`${texts.episodeAirDate}:`}
                    <Date>{date}</Date>
                </div>
            </MainInfo>
            <AdditionalInfo>
                <CharactersTitle>{`${texts.characters}:`}</CharactersTitle>
                <EpisodeCardCharacters
                    characters={characters}
                    onCharacterClick={onCharacterClick}
                />
            </AdditionalInfo>
        </Container>
    );
}

EpisodeCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
    onEpisodeClick: PropTypes.func.isRequired,
    onCharacterClick: PropTypes.func.isRequired,
};

const memoized = React.memo(EpisodeCard);

export { memoized as EpisodeCard };
