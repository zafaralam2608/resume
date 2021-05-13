import {Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader, Divider, List, ListItem, Typography} from "@material-ui/core";
import {experienceItems} from "../data/Experience";
import {ExpandMore} from "@material-ui/icons";
import {getTime} from "../constants/Utils";

export default function Experience() {

    return (
        <div id="2">
            <h2>Experience</h2>
            <Divider style={{width: "300px"}}/>
            <div style={{paddingTop: "10px"}}>
                {experienceItems.map((experience, index) => (
                    <Card key={index} style={{marginBottom: "10px"}}>
                        <CardHeader
                            title={experience.post}
                            subheader={experience.org + " , " + experience.location}
                        />
                        <CardContent>
                            {
                                experience.projects.map((project, index1) => (
                                    <Accordion key={index1}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore/>}
                                        >
                                            <CardHeader
                                                title={project.title}
                                                subheader={getTime(project.timeline)}
                                            />
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List>
                                                <Typography paragraph>
                                                    {"Role : " + project.role}
                                                </Typography>
                                                <Typography paragraph>
                                                    {"Description : " + project.description}
                                                </Typography>
                                                <Typography paragraph>
                                                    {"Technologies Used : " + project.technologies.join(' | ')}
                                                </Typography>
                                                <Typography>{"Major Contributions : "}</Typography>
                                                {project.contributions.map((contribution, index2) => (
                                                    <ListItem key={index2}>
                                                        <Typography>{"->  " + contribution}</Typography>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
