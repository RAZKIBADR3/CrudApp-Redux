import { legacy_createStore } from "redux";

const init_State = {
    products: [],
    obj2: {},
    upd: false
}

function myreducer(state = init_State, action) {
    switch (action.type) {
        case 'add':
            action.payload.cmp.nb = action.payload.cmp.nb + 1;
            return {
                ...state,
                products: [...state.products,{cmp:action.payload.cmp.nb,...action.payload.obj}]
            };
        case 'delete':
            return {
                ...state,
                products: state.products.filter(ee=>ee!==action.payload.e)
            };
        case 'getProduct':
            return {
                ...state,
                obj2: action.payload.e,
                upd: action.payload.upd
            }
        case 'update':
            let T = state.products
            let index = T.indexOf(T.find(ee=>ee===action.payload.e))
            T.splice(index,1,{...action.payload.e})
            return {
                products: T,
                obj2: {},
                upd: action.payload.upd
            }
        default:
            return state
    }
}

const store = legacy_createStore(myreducer)
export default store;