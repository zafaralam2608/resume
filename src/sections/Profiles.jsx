import {Button, Card, CardHeader, Divider} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {profiles} from "../data/Profiles";

export default function Profiles() {

    return (
        <div id="4">
            <h2>Profiles</h2>
            <Divider style={{width: "300px"}}/>
            <div style={{paddingTop: "10px"}}>
                {
                    profiles.map((profile, index) => (
                        <Card key={index} style={{marginBottom: "5px"}}>
                            <CardHeader
                                avatar={<FontAwesomeIcon size={"4x"} icon={profile.avatar}/>}
                                title={profile.title}
                                subheader={<Button size="small" href={profile.link}>Visit</Button>}
                            >
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}
