import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from '@/utils/helpers';
import styles from '../Pagination.scss';

function PaginationItem(props) {
    const { children, onClick, isCurrent, isEllipsis, page, className } = props;

    const cssClass = classNames(className, {
        [styles.item]: !isEllipsis,
        [styles.active]: isCurrent,
        [styles.ellipsis]: isEllipsis,
    });

    const handleClick = () => {
        onClick(page);
    };

    return (
        <li title={page} className={cssClass}>
            {isEllipsis ? children : <button onClick={handleClick}>{children}</button>}
        </li>
    );
}

PaginationItem.propTypes = {
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node,
    isCurrent: PropTypes.bool,
    isEllipsis: PropTypes.bool,
    className: PropTypes.string,
};

PaginationItem.defaultProps = {
    onClick: noop,
    isCurrent: false,
    isEllipsis: false,
};

const memoized = React.memo(PaginationItem);

export { memoized as PaginationItem };
