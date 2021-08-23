import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Moon from "./pages/Moon";
import Essentials from "./pages/Essentials";
import Slider from "./pages/Slider";

function App() {
  return (
    <>
        <Router>
            <div style={{
                backgroundImage: "url(" + "https://images.pexels.com/photos/4665679/pexels-photo-4665679.jpeg?cs=srgb&dl=pexels-abet-llacer-4665679.jpg&fm=jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: "100vw",
                height:"100vh",
            }}>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/moon" component={Moon}/>
                <Route path="/essentials" component={Essentials}/>
                <Route path="/slider" component={Slider} />
            </Switch>
            </div>
        </Router>
    </>
  );
}

export default App;
