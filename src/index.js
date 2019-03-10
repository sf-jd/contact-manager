import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./components/Context";

import { faPlus, faSortDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

library.add(faPlus, faSortDown, faTimes);

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header title="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
