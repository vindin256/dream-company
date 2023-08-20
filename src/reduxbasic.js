const redux = require("redux")

 const BUY_CAKE = "BUY_CAKE";
 function buyCake(){
    return{type:BUY_CAKE}
}
const initialState = {cakes:10}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return state;
            break;
    
        default:
            return state;
            break;
    }
}
 const store = redux.createStore(reducer);
console.log("Initial State :"+store.getState())