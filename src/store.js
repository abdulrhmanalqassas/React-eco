import { createStore, combineReducers , applyMiddleware} from "redux";
import { todos,isLoading } from "./todos/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = { todos };
const persistConfig = {
  key: "root",
  storage,
  StateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = createStore(
  persistedReducer,
 composeWithDevTools(
  applyMiddleware( thunk )
 ),
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()