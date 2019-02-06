import { rootReducer } from '../reducers'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk));
}
