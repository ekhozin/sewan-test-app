import { createSlice } from '@reduxjs/toolkit';

import { noop } from '@/utils/helpers';

const initialState = null;

const { reducer, actions } = createSlice({
    name: '@@app',
    initialState,
    reducers: {
        resetApp: noop,
        initHomepage: noop,
    },
});

const { resetApp, initHomepage } = actions;

export { reducer, resetApp, initHomepage };
