const { combineReducers } = require("redux");
const { iceCreamReducer } = require("./ice-cream-reducer");

export const reducer = combineReducers({
    iceCream:iceCreamReducer
})