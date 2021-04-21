import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Skills from "./sections/Skills";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Profiles from "./sections/Profiles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                    <Link to="/" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"home"}/>
                        <p>Home</p>
                    </Link>
                    <Link to="/skills" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"laptop-code"}/>
                        <p>Skills</p>
                    </Link>
                    <Link to="/experience" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"briefcase"}/>
                        <p>Experience</p>
                    </Link>
                    <Link to="/education" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"graduation-cap"}/>
                        <p>Education</p>
                    </Link>
                    <Link to="/profiles" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"id-card-alt"}/>
                        <p>Profiles</p>
                    </Link>
                </nav>
                <div className="w3-padding-large" id="main">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/skills">
                            <Skills/>
                        </Route>
                        <Route path="/experience">
                            <Experience/>
                        </Route>
                        <Route path="/education">
                            <Education/>
                        </Route>
                        <Route path="/profiles">
                            <Profiles/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}
