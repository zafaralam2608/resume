import {Avatar,Card, CardContent, Divider, Fab, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import display from "../data/profile.jpg";
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import {Email, Phone} from "@material-ui/icons";
import {home} from "../data/Home";
import {useStyles} from "../constants/Styles";

export default function Home() {
    const styles = useStyles();

    return (
        <div id="0">
            <h2>About Me</h2>
            <Divider style={{width: "300px"}}/>
            <Card id="0" className={styles.photoBar}  style={{marginTop: "10px"}}>
                <div>
                    <CardContent>
                        <List>
                            {home.contentList.map((content, index) => (
                                <Typography paragraph key={index}>
                                    {content}
                                </Typography>
                            ))}
                            <ListItem>
                                <ListItemIcon>
                                    <Email/>
                                </ListItemIcon>
                                <ListItemText primary={"Email : " + home.email}/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Phone/>
                                </ListItemIcon>
                                <ListItemText primary={"Phone : +" + home.phone.code + " " + home.phone.number}/>
                            </ListItem>
                        </List>
                    </CardContent>
                </div>
                <div style={{display: "flex", flexDirection: "column", padding: "10px 30px"}}>
                    <Avatar style={{height: "250px", width: "250px"}}
                            src={display}
                            alt={"Profile image"}/>
                    <Fab variant="extended" href={home.link}>
                        <GetAppSharpIcon/>
                        Download Resume
                    </Fab>
                </div>
            </Card>
        </div>
    );
}
