// Import Redux core functions
// combineReducers: Combines multiple reducers into one
// createStore: Creates the Redux store
// applyMiddleware: Allows adding middleware to the store
import { combineReducers, createStore, applyMiddleware } from 'redux';

// Import Redux Persist functions
// persistStore: Creates persistor to save/load state
// persistReducer: Wraps reducer to automatically save state
import { persistStore, persistReducer } from 'redux-persist';

// Import AsyncStorage for React Native
// This is where the state will be saved (device storage)
import storage from "@react-native-async-storage/async-storage"

// Import Redux Thunk middleware
// Allows action creators to return functions instead of just objects
// Enables async operations in Redux actions
import { thunk } from "redux-thunk";

// Import our custom reducer
// This handles user data state changes
import userDataReducer from './reducers/userData';


// Configuration for Redux Persist
// Tells Redux Persist how to save the state
const persistConfig = {
    key: "root",        // Key name in AsyncStorage where data will be saved
    storage             // Storage engine to use (AsyncStorage for React Native)
}

// Combine all reducers into one root reducer
// persistReducer wraps userDataReducer to make it persistent
// Every time state changes, it automatically saves to AsyncStorage
const reducer = combineReducers({
    userData: persistReducer(persistConfig, userDataReducer),
})


// Create the Redux store
// reducer: Handles state updates
// applyMiddleware(thunk): Enables async actions (thunk middleware)
export const store = createStore(reducer, applyMiddleware(thunk));

// Create persistor to manage saving/loading state
export const persistor = persistStore(store);