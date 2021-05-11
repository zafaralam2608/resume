import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useStyles} from "../constants/Styles";
import {Drawer} from "@material-ui/core";

export default function Sidebar() {
    const styles = useStyles();

    return (
        <nav className={styles.drawer}>
            <Drawer variant={"permanent"} open>
                <a href="#0" className={styles.drawerIcon}>
                    <FontAwesomeIcon size={"4x"} icon={"home"}/>
                    <p>Home</p>
                </a>
                <a href="#1" className={styles.drawerIcon}>
                    <FontAwesomeIcon size={"4x"} icon={"laptop-code"}/>
                    <p>Skills</p>
                </a>
                <a href="#2" className={styles.drawerIcon}>
                    <FontAwesomeIcon size={"4x"} icon={"briefcase"}/>
                    <p>Experience</p>
                </a>
                <a href="#3" className={styles.drawerIcon}>
                    <FontAwesomeIcon size={"4x"} icon={"graduation-cap"}/>
                    <p>Education</p>
                </a>
                <a href="#4" className={styles.drawerIcon}>
                    <FontAwesomeIcon size={"4x"} icon={"id-card-alt"}/>
                    <p>Profiles</p>
                </a>
            </Drawer>
        </nav>
    );
}
