import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Events from "./Events";

const RightSideBar = () => {
    return (
        <div className="h-full bg-slate-200 w-full">
            <div className="m-2 bg-white card p-4 rounded-none">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Events</h2>
                    <AdjustmentsHorizontalIcon className="h-8 w-8" />
                </div>
                <div className="divider"></div>
                <div>
                    <Events />
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
