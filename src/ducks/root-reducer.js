import { combineReducers } from 'redux';
import { reducer as episodesReducer } from '@/ducks/episodes/slice';
import { reducer as charactersReducer } from '@/ducks/characters/slice';

function createRootReducer() {
    return combineReducers({
        characters: charactersReducer,
        episodes: episodesReducer,
    });
}

export { createRootReducer };
