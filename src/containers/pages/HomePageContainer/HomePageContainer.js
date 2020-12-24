import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { generatePath } from 'react-router-dom';

import texts from '@/texts';
import { ROUTES } from '@/constants';
import { EpisodesList } from '@/components/lists';
import { Pager } from '@/components/common/Pager';
import { Row } from '@/components/common/Row';
import { FullscreenLoader } from '@/components/common/FullscreenLoader';
import { fetchEpisodesRequest } from '@/ducks/episodes/slice';
import {
    selectEpisodesToUIList,
    selectIsEpisodesLoading,
    selectPaginationToUI,
} from '@/ducks/episodes/selectors';

function HomePageContainer(props) {
    const {
        history: { push },
    } = props;

    const dispatch = useDispatch();
    const episodes = useSelector(selectEpisodesToUIList);
    const isLoading = useSelector(selectIsEpisodesLoading);
    const { page, prevPage, nextPage, isVisible } = useSelector(selectPaginationToUI);

    React.useEffect(() => {
        dispatch(fetchEpisodesRequest());
    }, [dispatch]);

    const handleEpisodeClick = React.useCallback(
        (episodeId) => {
            const path = generatePath(ROUTES.EPISODE, { id: episodeId });
            push(path);
        },
        [push],
    );

    const handlePageChange = React.useCallback(
        (newPage) => {
            dispatch(fetchEpisodesRequest({ page: newPage }));
        },
        [dispatch],
    );

    const handleCharacterClick = React.useCallback(
        (characterId) => {
            const path = generatePath(ROUTES.CHARACTER, { id: characterId });
            push(path);
        },
        [push],
    );

    const pagination = isVisible && (
        <Row>
            <Pager
                onChange={handlePageChange}
                page={page}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </Row>
    );

    const content = episodes.length ? (
        <EpisodesList
            items={episodes}
            onEpisodeClick={handleEpisodeClick}
            onCharacterClick={handleCharacterClick}
        />
    ) : (
        texts.noData
    );

    return (
        <>
            {isLoading && <FullscreenLoader />}
            {pagination}
            <Row>{content}</Row>
            {pagination}
        </>
    );
}

HomePageContainer.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const memoized = React.memo(HomePageContainer);

export { memoized as HomePageContainer };
