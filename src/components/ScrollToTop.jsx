import {Fab, Zoom} from "@material-ui/core";
import {KeyboardArrowUp} from "@material-ui/icons";
import {useState} from "react";

export function ScrollToTop() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 200);
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        visible
            ?
            <Zoom in={true} style={{position: "fixed", right: "30px", bottom: "30px"}}>
                <div onClick={handleClick} role="presentation">
                    <Fab size="medium">
                        <KeyboardArrowUp/>
                    </Fab>
                </div>
            </Zoom>
            :
            <div/>
    );
}
