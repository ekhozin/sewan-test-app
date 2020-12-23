import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

import { App } from '@/components/App';
import { history, store } from '@/store';
import { theme } from '@/theme';

function Root() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
}

const HotRoot = hot(Root);

export { HotRoot as Root };
