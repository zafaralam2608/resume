import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardContent,
    CardHeader,
    Divider, List, ListItem,
    Typography
} from "@material-ui/core";
import {experiences} from "../data/Experience";

export default function Experience() {

    return (
        <div>
            <h2>Experience</h2>
            <Divider style={{width: "300px"}}/>
            <div style={{paddingTop: "10px"}}>
                {experiences.map((experience) => (
                    <Card style={{marginBottom: "10px"}}>
                        <CardHeader
                            title={experience.post}
                            subheader={experience.org + " , " + experience.location}
                        />
                        <CardContent>
                            {
                                experience.projects.map((project) => (
                                    <Accordion>
                                        <AccordionSummary>
                                            <CardHeader
                                                title={project.title}
                                                subheader={project.duration.from + " - " + project.duration.to}
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
                                                {project.contributions.map((contribution) => (
                                                    <ListItem>
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
