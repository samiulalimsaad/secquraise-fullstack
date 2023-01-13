import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { ref } from "firebase/database";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import Event from "./Event";
import { database } from "./firebase.init";
import { eventInterface } from "./interface/eventInterface";

const RightSideBar = ({
    setEventToShow,
}: {
    setEventToShow: Dispatch<SetStateAction<eventInterface | undefined>>;
}) => {
    const [snapshots, loading, error] = useList(ref(database, "/"));

    useEffect(() => {
        if (!loading && snapshots && snapshots.length) {
            setEventToShow(snapshots[0].val());
        }
    }, [loading, snapshots, snapshots]);

    return (
        <div className="h-full bg-slate-200 w-full">
            <div className="m-2 bg-white card p-4 rounded-none">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Events</h2>
                    <a href="#filter-modal" className="btn">
                        <AdjustmentsHorizontalIcon className="h-8 w-8" />
                    </a>
                </div>
                <div className="divider"></div>
                <div className="overflow-y-scroll h-[calc(100vh-10rem)] pb-8">
                    <div>
                        {error && (
                            <strong className="text-error">
                                {error.message}
                            </strong>
                        )}
                        {loading && <span>Loading...</span>}
                        {!loading &&
                            snapshots &&
                            snapshots.map((v) => (
                                <Event
                                    key={v.key}
                                    event={v.val()}
                                    setEventToShow={setEventToShow}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
