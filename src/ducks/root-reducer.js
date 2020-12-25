import { combineReducers } from 'redux';
import { reducer as episodesReducer } from '@/ducks/episodes/reducer';
import { reducer as charactersReducer } from '@/ducks/characters/reducer';

function createRootReducer() {
    return combineReducers({
        characters: charactersReducer,
        episodes: episodesReducer,
    });
}

export { createRootReducer };
