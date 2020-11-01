import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Particles from "react-tsparticles";
import Home from './../src/pages/Home';
import AboutMe from './../src/pages/AboutMe';
import Portfolio from "./../src/pages/Portfolio";
import Contact from "./../src/pages/Contact";
import NoMatch from "./../src/pages/NoMatch";
import Navbar from './components/NavBar';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Particles 
                options={{
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                  particles: {
                      color: {
                        value: "#3cd1c2",
                      },
                      collisions: {
                        enable: true,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                      },
                      size: {
                        random: true,
                        value: 2,
                      },
                      detectRetina: true,
                  }
                }}
          /> */}
          <Footer />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer /> */}
      </div>
    </Router>
  );
}
export default App;