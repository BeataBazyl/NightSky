import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/"/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
