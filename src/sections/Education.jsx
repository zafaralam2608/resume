import {Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import {educations} from "../data/Education";

export default function Education() {

    return (
        <div>
            <h2>Education</h2>
            <Divider style={{width: "300px"}}/>
            <div style={{paddingTop: "10px"}}>
                {
                    educations.map((education) => (
                        <Card style={{marginBottom: "10px"}}>
                            <CardHeader
                                title={education.course + "  /  " + education.institute + " , " + education.location }
                                subheader={education.duration.from + "  -  " + education.duration.to}
                            />
                            <CardContent>
                                {"Aggregate: " + education.score}
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}
