import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Moon from "./pages/Moon";
import Essentials from "./pages/Essentials";
import Slider from "./pages/Slider";
import StarsIntro from "./components/StarsIntro";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/moon" component={Moon}/>
                <Route path="/essentials" component={Essentials}/>
                <Route path="/slider" component={Slider} />
            </Switch>
        </Router>
        <StarsIntro/>
    </>
  );
}

export default App;
