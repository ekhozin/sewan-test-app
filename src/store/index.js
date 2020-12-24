import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import { createRootReducer } from '@/ducks/root-reducer';
import { rootSaga } from '@/ducks/root-saga';

/**
 * List of redux middlewares
 */
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

/**
 * Create redux store
 */
const store = createStore(
    createRootReducer(),
    {},
    composeWithDevTools(applyMiddleware(...middlewares)),
);

/**
 * Run root saga
 */
sagaMiddleware.run(rootSaga);

export { store };
