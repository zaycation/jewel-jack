import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/Scroller";
import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import DonatePage from "./pages/DonatePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/donate" component={DonatePage} />
        <Route path="/app" component={AppPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
