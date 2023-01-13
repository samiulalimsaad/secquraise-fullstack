import { useState } from "react";
import EventDetails from "./EventDetails";
import { eventInterface } from "./interface/eventInterface";
import LeftSidebar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";

const Layout = () => {
    const [eventToShow, setEventToShow] = useState<eventInterface>();

    return (
        <div className="h-[calc(100vh-4rem)] grid grid-cols-12  overflow-hidden">
            <div className="col-span-9 grid grid-cols-12">
                <LeftSidebar />
                <div className="col-span-11">
                    {eventToShow && <EventDetails event={eventToShow} />}
                </div>
            </div>
            <div className="col-span-3">
                <RightSideBar setEventToShow={setEventToShow} />
            </div>
        </div>
    );
};

export default Layout;
