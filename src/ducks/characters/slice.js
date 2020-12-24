import { createSlice } from '@reduxjs/toolkit';

import { EMPTY_OBJECT } from '@/constants';
import { noop } from '@/utils/helpers';

const initialState = {
    character: EMPTY_OBJECT,
    isLoading: false,
};

const { reducer, actions } = createSlice({
    name: '@@characters',
    initialState,
    reducers: {
        startIsLoading(state) {
            state.isLoading = true;
        },
        stopIsLoading(state) {
            state.isLoading = false;
        },
        fetchCharacterRequest: noop,
        fetchCharacterSuccess(state, action) {
            const { payload } = action;
            state.character = payload;
        },
        clearCharacter(state) {
            state.character = initialState.character;
        },
    },
});

const {
    startIsLoading,
    stopIsLoading,
    fetchCharacterRequest,
    fetchCharacterSuccess,
    clearCharacter,
} = actions;

export {
    startIsLoading,
    stopIsLoading,
    fetchCharacterRequest,
    fetchCharacterSuccess,
    clearCharacter,
    reducer,
};
