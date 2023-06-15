import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { challengeReducer } from './reducer';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const loggerMiddleware = createLogger();

export const rootReducer = combineReducers({
  challenge: challengeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware, loggerMiddleware))
);

epicMiddleware.run(rootEpic as any);
