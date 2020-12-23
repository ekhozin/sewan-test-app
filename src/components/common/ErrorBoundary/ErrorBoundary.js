import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '@/utils/helpers';
import styles from './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    static propTypes = {
        children: PropTypes.node,
        message: PropTypes.string,
        onErrorCatch: PropTypes.func,
    };

    static defaultProps = {
        message: 'Something went wrong',
        onErrorCatch: noop,
    };

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        this.props.onErrorCatch(error, errorInfo);
    }

    render() {
        const { children, message } = this.props;

        if (this.state.hasError) {
            return <p className={styles.errorBoundary}>{message}</p>;
        }

        return children;
    }
}

export { ErrorBoundary };
