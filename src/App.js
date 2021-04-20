import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/Scroller";
import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import DoantePage from "./pages/DoantePage";
import AddContributors from "./components/AddContributors"

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/donate" component={DoantePage} />
        <Route path="/addcontributors" component={AddContributors} />
        <Route path="/app" component={AppPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
