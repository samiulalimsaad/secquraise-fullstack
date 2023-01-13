import { useEffect } from "react";
import Layout from "../utils/Layout";
import Navbar from "./Navbar";

function App() {
    useEffect(() => {
        document.title = "secquraise-fullstack-job";
    }, []);

    return (
        <div className="h-screen">
            <Navbar />
            <Layout />
        </div>
    );
}

export default App;
