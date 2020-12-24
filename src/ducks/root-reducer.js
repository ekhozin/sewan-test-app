import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as episodesReducer } from '@/ducks/episodes/slice';
import { reducer as charactersReducer } from '@/ducks/characters/slice';

function createRootReducer(history) {
    return combineReducers({
        characters: charactersReducer,
        episodes: episodesReducer,
        router: connectRouter(history),
    });
}

export { createRootReducer };
