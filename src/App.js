import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { client } from "@tilework/opus";
import Pages from "./views/pages";

class App extends Component {
  render() {
    client.setEndpoint("http://localhost:4000/");
    return (
      <>
        <Provider store={store}>
          <Router>
            <Pages />
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
