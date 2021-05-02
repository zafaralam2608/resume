import {Avatar, Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import {skills} from "../data/Skills";

export default function Skills() {

    return (
        <div id="1">
            <h2>Technical Skills</h2>
            <Divider style={{width: "300px"}}/>
            <div style={{paddingTop: "10px"}}>
                {skills.map((skill, index) => (
                    <Card key={index} style={{marginBottom: "10px"}}>
                        <CardHeader title={skill.section}/>
                        <CardContent>
                            {skill.items.map((item, index2) => (
                                <CardHeader key={index2} className={"w3-quarter"}
                                            avatar={<Avatar>{item.avatar}</Avatar>}
                                            title={item.title}
                                            subheader={item.experience.year + "y " + item.experience.month + "m"}
                                />
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
