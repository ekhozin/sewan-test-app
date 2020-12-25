import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import texts from '@/texts';
import { EpisodesList } from '@/components/lists';
import { Pager } from '@/components/common/Pager';
import { Row } from '@/components/common/Row';
import { FullscreenLoader } from '@/components/common/FullscreenLoader';
import { Searchbar } from '@/components/common/Searchbar';
import { fetchEpisodesRequest } from '@/ducks/episodes/reducer';
import {
    selectEpisodesToUIList,
    selectIsEpisodesLoading,
    selectPaginationToUI,
} from '@/ducks/episodes/selectors';

/**
 * React component. Renders home page connected to redux store.
 * List of episodes is rendered on the home page.
 */
function HomePageContainer() {
    const dispatch = useDispatch();
    const episodes = useSelector(selectEpisodesToUIList);
    const isLoading = useSelector(selectIsEpisodesLoading);
    const { page, prevPage, nextPage, isVisible } = useSelector(selectPaginationToUI);

    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        dispatch(fetchEpisodesRequest());
    }, [dispatch]);

    const handlePageChange = React.useCallback(
        (newPage) => {
            dispatch(fetchEpisodesRequest({ page: newPage }));
        },
        [dispatch],
    );

    const handleSearch = React.useCallback(() => {
        dispatch(fetchEpisodesRequest({ page: 1, search: search.trim() }));
    }, [dispatch, search]);

    const handleClearSearch = React.useCallback(() => {
        setSearch('');
        dispatch(fetchEpisodesRequest({ page: 1 }));
    }, [dispatch]);

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

    const content = episodes.length ? <EpisodesList items={episodes} /> : texts.noData;

    return (
        <>
            {isLoading && <FullscreenLoader />}
            <Row>
                <Searchbar
                    value={search}
                    onSearch={handleSearch}
                    onClear={handleClearSearch}
                    onChange={setSearch}
                />
            </Row>
            {pagination}
            <Row>{content}</Row>
            {pagination}
        </>
    );
}

const memoized = React.memo(HomePageContainer);

export { memoized as HomePageContainer };
