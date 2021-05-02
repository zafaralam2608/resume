import './App.css';
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
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
                    <Link to="/0" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"home"}/>
                        <p>Home</p>
                    </Link>
                    <Link to="/1" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"laptop-code"}/>
                        <p>Skills</p>
                    </Link>
                    <Link to="/2" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"briefcase"}/>
                        <p>Experience</p>
                    </Link>
                    <Link to="/3" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"graduation-cap"}/>
                        <p>Education</p>
                    </Link>
                    <Link to="/4" className="w3-bar-item w3-button w3-padding-large">
                        <FontAwesomeIcon size={"4x"} icon={"id-card-alt"}/>
                        <p>Profiles</p>
                    </Link>
                </nav>
                <div className="w3-padding-large" id="main">
                    <Switch>
                        <Redirect exact from="/" to="0" />
                        <Route path="/0">
                            <Home/>
                        </Route>
                        <Route path="/1">
                            <Skills/>
                        </Route>
                        <Route path="/2">
                            <Experience/>
                        </Route>
                        <Route path="/3">
                            <Education/>
                        </Route>
                        <Route path="/4">
                            <Profiles/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}
