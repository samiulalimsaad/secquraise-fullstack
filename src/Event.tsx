import { Dispatch, SetStateAction } from "react";
import { eventInterface } from "./interface/eventInterface";

const Event = ({
    event,
    setEventToShow,
}: {
    event: eventInterface;
    setEventToShow: Dispatch<SetStateAction<eventInterface | undefined>>;
}) => {
    return (
        <div
            className="card w-full bg-slate-200 rounded-none my-3 hover:bg-slate-500 hover:text-white duration-300 cursor-pointer"
            onClick={() => setEventToShow(event)}
        >
            <div className="card-body p-2">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">
                        {event.ID}: {event.Location}
                    </h2>
                    <div className="flex items-center justify-between gap-2">
                        <span>{event.Date}</span>
                        <span>{event.Time}</span>
                    </div>
                </div>
                <p>Person Detected.</p>
            </div>
        </div>
    );
};

export default Event;
