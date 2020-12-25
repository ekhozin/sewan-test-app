import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from '@/components/App';
import { store } from '@/store';
import { theme } from '@/theme';

/**
 * React component.
 * Renders App-component wrapped with redux Provider, router and theme provider.
 */
function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
}

const HotRoot = hot(Root);

export { HotRoot as Root };
