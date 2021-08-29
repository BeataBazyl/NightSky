import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MoonPage from "./pages/MoonPage";
import Essentials from "./components/Essentials";
import MagicPage from "./pages/MagicPage";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import FooterPage from "./pages/FooterPage";

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
                <Route path="/footer" component={FooterPage} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
