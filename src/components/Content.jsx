import Home from "../sections/Home";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Profiles from "../sections/Profiles";
import {ScrollToTop} from "./ScrollToTop";
import {useStyles} from "../constants/Styles";

export default function Content() {
    const styles = useStyles();

    return (
        <main id="main" className={styles.content}>
            <Home/>
            <Skills/>
            <Experience/>
            <Education/>
            <Profiles/>
            <div style={{height: "60px"}}>
                <ScrollToTop/>
            </div>
        </main>
    );
}
