import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

const Notifications = (props) => <ToastContainer {...props} />;

Notifications.propTypes = {
    limit: PropTypes.number,
    newestOnTop: PropTypes.bool,
};

Notifications.defaultProps = {
    limit: 5,
    newestOnTop: true,
};

export { Notifications };
