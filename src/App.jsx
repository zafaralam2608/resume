import './App.css';
import Skills from "./sections/Skills";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Profiles from "./sections/Profiles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function App() {
    return (
        <div>
            <nav className="w3-sidebar w3-bar-block w3-small w3-center">
                <a href="#" className="w3-bar-item w3-button w3-padding-large">
                    <FontAwesomeIcon size={"4x"} icon={"home"}/>
                    <p>Home</p>
                </a>
                <a href="#1" className="w3-bar-item w3-button w3-padding-large">
                    <FontAwesomeIcon size={"4x"} icon={"laptop-code"}/>
                    <p>Skills</p>
                </a>
                <a href="#2" className="w3-bar-item w3-button w3-padding-large">
                    <FontAwesomeIcon size={"4x"} icon={"briefcase"}/>
                    <p>Experience</p>
                </a>
                <a href="#3" className="w3-bar-item w3-button w3-padding-large">
                    <FontAwesomeIcon size={"4x"} icon={"graduation-cap"}/>
                    <p>Education</p>
                </a>
                <a href="#4" className="w3-bar-item w3-button w3-padding-large">
                    <FontAwesomeIcon size={"4x"} icon={"id-card-alt"}/>
                    <p>Profiles</p>
                </a>
            </nav>
            <div className="w3-padding-large" id="main">
                <Home/>
                <Skills/>
                <Experience/>
                <Education/>
                <Profiles/>
            </div>
        </div>
    );
}
