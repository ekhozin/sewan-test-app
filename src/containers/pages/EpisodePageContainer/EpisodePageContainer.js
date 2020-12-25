import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEpisodeRequest, clearEpisode } from '@/ducks/episodes/reducer';
import {
    selectEpisodeCharactersToUI,
    selectEpisodeInfoToUI,
    selectIsEpisodesLoading,
} from '@/ducks/episodes/selectors';
import { CharactersList } from '@/components/lists';
import { Row } from '@/components/common/Row';
import { EpisodeInfo } from '@/components/shared/EpisodeInfo';
import { FullscreenLoader } from '@/components/common/FullscreenLoader';

/**
 * React component. Renders episodes's page connected to redux store.
 */
function EpisodePageContainer(props) {
    const {
        match: {
            params: { id },
        },
    } = props;

    const dispatch = useDispatch();
    const characters = useSelector(selectEpisodeCharactersToUI);
    const info = useSelector(selectEpisodeInfoToUI);
    const isLoading = useSelector(selectIsEpisodesLoading);

    React.useEffect(() => {
        dispatch(fetchEpisodeRequest(id));

        return () => {
            dispatch(clearEpisode());
        };
    }, [dispatch, id]);

    return (
        <>
            {isLoading && <FullscreenLoader />}
            <Row>
                <EpisodeInfo {...info} />
            </Row>
            <CharactersList items={characters} />
        </>
    );
}

EpisodePageContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

const memoized = React.memo(EpisodePageContainer);

export { memoized as EpisodePageContainer };
