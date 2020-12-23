import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Loader.scss';

function Loader(props) {
    const { className } = props;
    const cssClass = classNames(styles.ldsEllipsis, className);

    return (
        <div className={cssClass}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}

Loader.propTypes = {
    className: PropTypes.string,
};

export { Loader };
