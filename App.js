import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./userReducer";
import CounterMapDispatchFn from "./components/Counter";
import { View } from "react-native";

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// The App renders everything
export default function App() {
  return (
    <View>
        <Provider store={store}>
          <CounterMapDispatchFn />
        </Provider>
    </View>
  );
};