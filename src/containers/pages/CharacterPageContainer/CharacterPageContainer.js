import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { FullscreenLoader } from '@/components/common/FullscreenLoader';
import { CharacterInfo } from '@/components/shared/CharacterInfo';
import { fetchCharacterRequest, clearCharacter } from '@/ducks/characters/slice';
import { selectIsCharacterLoading, selectCharacter } from '@/ducks/characters/selectors';

function CharacterPageContainer(props) {
    const {
        match: {
            params: { id },
        },
    } = props;

    const dispatch = useDispatch();

    const character = useSelector(selectCharacter);
    const isLoading = useSelector(selectIsCharacterLoading);

    React.useEffect(() => {
        dispatch(fetchCharacterRequest(id));

        return () => {
            dispatch(clearCharacter());
        };
    }, [dispatch, id]);

    return (
        <>
            {isLoading && <FullscreenLoader />}
            <CharacterInfo {...character} />
        </>
    );
}

CharacterPageContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

const memoized = React.memo(CharacterPageContainer);

export { memoized as CharacterPageContainer };
