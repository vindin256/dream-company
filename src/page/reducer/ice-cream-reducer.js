import { UPDATE_ICE_CREAM_LIST,ADD_ICE_CREAM_LIST, ADD_ICE_CREAM } from "./action-creator-ice/ice-cream-action-type";

const initialState ={}
export const iceCreamReducer = (state=initialState, action)=>{
    switch (action.type) {
        case UPDATE_ICE_CREAM_LIST:
            return action.payload;
            break;
            case ADD_ICE_CREAM:
                return [...state, action.payload];
                break;
            
    
        default:
            return state;
    }
}