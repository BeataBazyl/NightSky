import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import Essentials from "./components/Essentials";
import MagicPage from "./pages/MagicPage";
import Slider from "./components/Slider";
import FooterPage from "./pages/FooterPage";
import Nasa from "./components/Nasa";
import MoonPage from "./pages/MoonPage";
import React from "react";
import Navbar from "./components/Navbar";
import StarsIntro from "./components/StarsIntro";
import {IconContext} from "react-icons";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/weather" component={WeatherPage}/>
                    <Route path="/moon" component={MoonPage}/>
                    <Route path="/essentials" component={Essentials}/>
                    <Route path="/magic" component={MagicPage}/>
                    <Route path="/slider" component={Slider} />
                    <Route path="/nasa" component={Nasa} />
                    <Route path="/footer" component={FooterPage} />
                    <StarsIntro/>
                </Switch>
        </Router>
    </>
  );
}

export default App;
