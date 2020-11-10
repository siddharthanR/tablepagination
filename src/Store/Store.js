import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from '../Reducers/Reducer'
const middlewares = [thunk];

// https://www.npmjs.com/package/redux-logger
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({});

export default function configureStore() {
    return createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
}
