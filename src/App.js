import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './../src/pages/Home';
import Portfolio from "./../src/pages/Portfolio";
import Contact from "./../src/pages/Contact";
import NoMatch from "./../src/pages/NoMatch";
import Navbar from './components/NavBar';
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div class="bg_image">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
