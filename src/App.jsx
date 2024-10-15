import Content from "./components/Content";
import { home } from "./data/Home";

export default function App() {

    document.title = home.name;

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Content/>
        </div>
    );
}
