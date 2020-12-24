import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPager = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

const CurrentPage = styled.div`
    color: ${(props) => props.theme.colors.primary};
    padding: 0 0.625rem;
`;

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    color: ${(props) => props.theme.colors.white};
`;

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
