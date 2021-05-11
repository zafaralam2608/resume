import {home} from "./data/Home";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

export default function App() {

    document.title = home.name;

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Sidebar/>
            <Content/>
        </div>
    );
}
