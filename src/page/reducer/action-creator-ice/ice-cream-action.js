import { getMainObject } from "../../service/service-middleware"
import { ADD_ICE_CREAM, UPDATE_ICE_CREAM_LIST } from "./ice-cream-action-type"

export const loadIceCreamList = () => {

    return async function (dispatch) {
        let list =  await getMainObject()
        let categoryList = list.reduce((pre, item) => {
            if (!Object.hasOwn(pre, item.category)) {
                pre[item.category] = [item];
            } else {
                pre[item.category].push(item);
            }
            return pre;
        }, {})
        dispatch({
            type: UPDATE_ICE_CREAM_LIST,
            payload: categoryList
        })
    }


}

export const addItem = (obj)=>{
    return function (dispatch){
        dispatch({type:ADD_ICE_CREAM,payload:obj})
    }
}