import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import Home from "../../components/Home";
import Crud from "../../components/Crud";
import ApiCall from "../../components/ApiCall";
import Iconsexample from "../../components/IconsExample";
import AutomationPage from "../AutomationPage";
import Mlcomp from "../../components/Mlcomp";
import VideoComponent from "../../components/VideoComponent";
import TestDetails from "../../components/TestDetails";
import DebuggerTab from "../../components/DebuggerTab";
import DebuggerTable from "../../components/DebuggerTable";
import Environmentselector from "../../components/EnvironmentSelector";
import Buildview from "../../components/BuildView";
export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {" "}
          {/* display Home at default path as of now */}{" "}
          <main>
            {/* <Route exact path="/" component={Home} />{" "} */}
            <Route exact path="/crud" component={Crud} />{" "}
            <Route exact path="/api" component={ApiCall} />{" "}
            <Route exact path="/react-icons" component={Iconsexample} />{" "}
            <Route exact path="/automation" component={AutomationPage} />{" "}
            <Route exact path="/magic-leap-components" component={Mlcomp} />{" "}
            <Route exact path="/video" component={VideoComponent} />{" "}
            <Route exact path="/test-details" component={TestDetails} />{" "}
            <Route exact path="/debugger" component={DebuggerTab} />{" "}
            <Route exact path="/debuggerTable" component={DebuggerTable} />{" "}
            <Route exact path="/envSelect" component={Environmentselector} />{" "}
            <Route exact path="/buildview" component={Buildview} />{" "}
            <Route
              exact
              path="/"
              render={() => <Redirect to="/automation" />}
            />
          </main>{" "}
        </div>
      </Router>
    );
  }
}

export default App;
