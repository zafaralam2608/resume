import {Avatar, CardContent, Divider, Fab, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import display from "../data/profile.jpg";
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import {Email, Phone} from "@material-ui/icons";
import {home} from "../data/Home";

export default function Home() {
    return (
        <div id="0">
            <h2>About Me</h2>
            <Divider style={{width: "300px"}}/>
            <div id="0" style={{display: "flex", paddingTop: "30px", height: "100%"}}>
                <div style={{width: "100%", paddingRight: "30px"}}>
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
                <div style={{display: "flex", flexDirection: "column", float: "right"}}>
                    <Avatar style={{height: "250px", width: "250px"}}
                            src={display}
                            alt={"Profile image"}/>
                    <br/>
                    <Fab variant="extended" href={home.link}>
                        <GetAppSharpIcon/>
                        Download Resume
                    </Fab>
                </div>
            </div>
        </div>
    );
}
