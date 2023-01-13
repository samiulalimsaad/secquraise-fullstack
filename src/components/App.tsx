import { useEffect, useState } from "react";
import Layout from "../utils/Layout";
import Navbar from "./Navbar";

function App() {
    const [total, setTotal] = useState({ male: 0, female: 0 });

    useEffect(() => {
        document.title = "secquraise-fullstack-job";
    }, []);

    return (
        <div className="h-screen">
            <Navbar total={total} />
            <Layout setTotal={setTotal} />
        </div>
    );
}

export default App;
