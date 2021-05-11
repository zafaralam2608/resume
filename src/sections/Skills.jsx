import {Avatar, Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import {skills} from "../data/Skills";
import {useStyles} from "../constants/Styles";

export default function Skills() {
    const styles = useStyles();

    return (
        <div id="1">
            <h2>Technical Skills</h2>
            <Divider style={{width: "300px"}}/>
            <div style={{paddingTop: "30px"}}>
                {skills.map((skill, index) => (
                    <Card key={index} style={{marginBottom: "10px"}}>
                        <CardHeader title={skill.section}/>
                        <CardContent style={{display: "flex", flexWrap: "wrap"}}>
                            {skill.items.map((item, index2) => (
                                <CardHeader key={index2} className={styles.quarterCard}
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
