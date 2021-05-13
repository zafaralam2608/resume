import {timelineItems} from "../data/Timeline";
import moment from "moment";

export const calcTime = (timeline) => {
    const {startTimeline, endTimeline} = timeline;
    const start = timelineItems[startTimeline].start;
    const end = endTimeline ? timelineItems[endTimeline].start : "";
    const startTime = moment(start);
    const endTime = end ? moment(end) : moment();
    const totalMonths = endTime.diff(startTime, "months");
    const month = totalMonths % 12;
    const year = (totalMonths - month) / 12;
    return (year ? year + "y" : "") + " " + (month ? month + "m" : "");
}

export const getTime = (key) => {
    const {start, end} = timelineItems[key];
    const startTime = moment(start).format("MMM YYYY");
    const endTime = end ? moment(end).format("MMM YYYY") : "Present";
    return startTime + " - " + endTime;
}
