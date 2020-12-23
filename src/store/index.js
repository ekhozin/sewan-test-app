import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from '@/ducks/root-reducer';
// import { rootSaga } from '@/ducks/root-saga';

/**
 * Create browser history
 */
const history = createBrowserHistory();

/**
 * List of redux middlewares
 */
// const sagaMiddleware = createSagaMiddleware();
const reactRouterMiddleware = routerMiddleware(history);

// const middlewares = [reactRouterMiddleware, sagaMiddleware];
const middlewares = [reactRouterMiddleware];

/**
 * Create redux store
 */
const store = createStore(
    createRootReducer(history),
    {},
    composeWithDevTools(applyMiddleware(...middlewares)),
);

/**
 * Run root saga
 */
// sagaMiddleware.run(rootSaga);

export { history, store };
