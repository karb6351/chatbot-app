import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AllReducer from './reducers';

const store = createStore(AllReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
