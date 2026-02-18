🧠 Redux Learning App

📱 A simple React Native (Expo) app built to learn the basics of Redux state management.

❓ What is This?

🚀 This is a beginner-friendly project with a few screens (Home, Settings, Profile) connected through a bottom tab navigator.
🎯 The main goal is to understand how Redux works in a React Native app.

📚 What I Learned
🧩 Redux Core

🏪 Store — Single source of truth that holds the entire app state

⚡ Actions — Plain objects like { type: LOGIN, payload: true } that describe what happened

🛠 Action Creators — Functions that return action objects (loginAction, logoutAction, changeNameAction)

🔄 Reducers — Pure functions that take current state + action and return new state

🏷 Constants — Keeping action type strings in one file to avoid typos

🧱 combineReducers — Merging multiple reducers into one root reducer

🚀 dispatch — Sending actions to the store to trigger state changes

🔗 React-Redux

🎁 Provider — Wrapping the app with <Provider store={store}> so all components can access the store

👀 useSelector — Reading state from the store inside components

🕹 useDispatch — Getting the dispatch function to send actions from components

⏳ Redux Thunk

🔌 Middleware — Adding extra functionality between dispatching an action and the reducer

⚙ applyMiddleware — Plugging thunk into the store

🌐 Async Actions — Thunk lets action creators return functions (not just objects) for async operations

💾 Redux Persist

🔄 persistReducer — Wrapping a reducer so its state automatically saves to storage

🗄 persistStore — Creating a persistor that manages saving/loading

📱 AsyncStorage — Using device storage (AsyncStorage) to keep state alive after app restarts

🗂 Project Structure

redux/
store.js → Store setup (createStore, middleware, persist)
constants.js → Action type strings (LOGIN, LOGOUT, CHANGE_NAME)

actions/
userActions.js → Action creators (login, logout, changeName)

reducers/
userData.js → Reducer (handles isSignedIn, userName)

screens/
Home → Shows sign-in status, login button
Settings → Shows / changes user name
Profile → User profile screen

🛠 Tech Stack

⚛ React Native + Expo

🧠 Redux + React-Redux

🔁 Redux Thunk

💾 Redux Persist + AsyncStorage

🧭 React Navigation (Bottom Tabs)

▶ Run

npm install
npx expo start
