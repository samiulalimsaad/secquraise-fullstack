import { ref as storageRef } from "firebase/storage";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { storage } from "./firebase.init";
import { eventInterface } from "./interface/eventInterface";
import SideBySide2Cols from "./SideBySide2Cols";

const EventDetails = ({ event }: { event: eventInterface }) => {
    const [value, loading, error] = useDownloadURL(
        storageRef(storage, `users/${event.Name}.jpg`)
    );

    return (
        <div className="h-full w-full">
            <h2 className="text-center capitalize text-xl font-semibold">
                {event.Gender}
            </h2>
            <div className="grid grid-cols-2 justify-center items-center h-full">
                <div>
                    <div className="text-xl font-semibold">
                        <h3>{event.ID}</h3>
                        <h3>Person Detected</h3>
                    </div>

                    <div>
                        <SideBySide2Cols name="name" value={event.Name} />
                        <SideBySide2Cols
                            name="location"
                            value={event.Location}
                        />
                        <SideBySide2Cols name="date" value={event.Date} />
                        <SideBySide2Cols name="time" value={event.Time} />
                        <div className="mt-4">
                            <SideBySide2Cols
                                name="description"
                                value={`${event.Name} detected at ${event.Location} on ${event.Date}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    {error && (
                        <strong className="text-error">{error.message}</strong>
                    )}
                    {loading && <span>Loading...</span>}
                    {!loading && value && (
                        <img
                            src={value}
                            alt={event.Name}
                            height="800"
                            width="500"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
