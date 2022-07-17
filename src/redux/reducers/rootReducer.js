import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import toggleReducer from "./toggleReducer";

const rootReducer = combineReducers({
    dataReducer,
    toggleReducer,
});

export {rootReducer}