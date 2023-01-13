import { Dispatch, SetStateAction, useState } from "react";
import EventDetails from "../components/Event/EventDetails";
import LeftSidebar from "../components/LeftSidebar";
import RightSideBar from "../components/RightSideBar";
import { eventInterface } from "../interface/eventInterface";

const Layout = ({
    setTotal,
}: {
    setTotal: Dispatch<SetStateAction<{ male: number; female: number }>>;
}) => {
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
                <RightSideBar
                    setEventToShow={setEventToShow}
                    setTotal={setTotal}
                />
            </div>
        </div>
    );
};

export default Layout;
