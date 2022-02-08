import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { navReducer } from "./navReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;