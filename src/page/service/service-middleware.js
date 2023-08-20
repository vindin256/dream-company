import { getCall,postCall } from "../utility/axios/commom-axios";

async function fetchDropDownList(name = "", level = 0, id = 0, nextId = 0) {

    try {
        let res = await getCall("http://localhost:8081/getDropdownList", { params: { value: name, level, id, nextId } });
        return res.data;
    } catch (error) {
        if (error.response) { }
        else if (error.request) { }
        else { }
    }
    return [];
}

async function saveItem(obj) {
    try {
        let res = await postCall("http://localhost:8081/saveItem", obj);
        return res.data.statusCode ==200?"sucess":"fail";
    }
    catch (error) {
        if (error.response) { }
        else if (error.request) { }
        else { }
    }
    return "fail";
}

const getMainObject=async()=>{
    try {
        let res = await getCall("http://localhost:8081/getObject");
        return res.data;
    } catch (error) {
        if (error.response) { }
        else if (error.request) { }
        else { }
    }
    return {};
}
export { fetchDropDownList, saveItem,getMainObject };