import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { navReducer } from "./navReducer";
import { profileReducer } from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer
});

let store = createStore(reducers);

export default store;