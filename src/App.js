import {Switch, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoonPage from "./pages/MoonPage";
import StarsIntro from "./components/StarsIntro";
import Essentials from "./components/Essentials";
import MagicPage from "./pages/MagicPage";
import Slider from "./components/Slider";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/moon" component={MoonPage}/>
                <Route path="/essentials" component={Essentials}/>
                <Route path="/magic" component={MagicPage}/>
                <Route path="/slider" component={Slider} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
