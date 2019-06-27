import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Users from "./components/Users/Users";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Users} />
      </Router>
    </Provider>
  );
}

export default App;
