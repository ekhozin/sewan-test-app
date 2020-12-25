import React from 'react';
import PropTypes from 'prop-types';

import { StyledPager, CurrentPage, StyledButton } from './styles';

/**
 * React component. Renders simple pagination.
 */
function Pager(props) {
    const { onChange, page, nextPage, prevPage } = props;

    const handleNextClick = () => onChange(nextPage);

    const handlePrevClick = () => onChange(prevPage);

    return (
        <StyledPager>
            {prevPage && <StyledButton onClick={handlePrevClick}>{'<'}</StyledButton>}
            <CurrentPage>{page}</CurrentPage>
            {nextPage && <StyledButton onClick={handleNextClick}>{'>'}</StyledButton>}
        </StyledPager>
    );
}

Pager.propTypes = {
    onChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    nextPage: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(null)]),
    prevPage: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(null)]),
};

const memoized = React.memo(Pager);

export { memoized as Pager };
