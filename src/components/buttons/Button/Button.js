import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '@/utils/helpers';
import styles from './Button.scss';

function Button(props) {
    const { children, isOutline, isFullWidth, onClick, className } = props;
    const cssClass = classNames(styles.button, className, {
        [styles.outline]: isOutline,
        [styles.fullWidth]: isFullWidth,
    });

    return (
        <button className={cssClass} onClick={onClick}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    onClick: noop,
};

Button.propTypes = {
    isOutline: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export { Button };
