import {Switch, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Moon from "./pages/Moon";
import Essentials from "./pages/Essentials";
import Slider from "./pages/Slider";
import StarsIntro from "./components/StarsIntro";
import InfoSection from "./components/InfoSection";
import {homeObject, homeObjectTwo, homeObjectThree} from "./components/InfoSection/Data";

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
        <InfoSection {...homeObject}/>
        <InfoSection {...homeObjectTwo}/>
        <InfoSection {...homeObjectThree}/>
    </>
  );
}

export default App;
