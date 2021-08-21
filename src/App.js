import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Moon from "./pages/Moon";
import Essentials from "./pages/Essentials";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/moon" component={Moon}/>
                <Route path="/essentials" component={Essentials}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
