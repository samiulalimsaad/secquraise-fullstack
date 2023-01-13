import FilterModal from "./FilterModal";
import Layout from "./Layout";
import Navbar from "./Navbar";

function App() {
    return (
        <div className="h-screen">
            <Navbar />
            <Layout />
            <FilterModal />
        </div>
    );
}

export default App;
