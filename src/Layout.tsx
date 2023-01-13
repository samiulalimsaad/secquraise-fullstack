import EventDetails from "./EventDetails";
import LeftSidebar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";

const Layout = () => {
    return (
        <div className="h-[calc(100vh-4rem)] grid grid-cols-12">
            <div className="col-span-9 grid grid-cols-12">
                <LeftSidebar />
                <div className="col-span-11">
                    <EventDetails />
                </div>
            </div>
            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default Layout;
