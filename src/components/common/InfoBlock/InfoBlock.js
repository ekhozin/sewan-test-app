import React from 'react';
import PropTypes from 'prop-types';

import { Title, Data } from './styles';

/**
 * React component. Renders informational block.
 */
function InfoBlock(props) {
    const { title, data } = props;

    return (
        <div>
            <Title>{title}</Title>
            <Data>{data}</Data>
        </div>
    );
}

InfoBlock.propTypes = {
    title: PropTypes.node,
    data: PropTypes.node,
};

const memoized = React.memo(InfoBlock);

export { memoized as InfoBlock };
