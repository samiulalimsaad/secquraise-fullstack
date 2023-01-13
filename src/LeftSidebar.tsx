import {
    ArrowLeftOnRectangleIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";

const LeftSidebar = () => {
    return (
        <div className="bg-sky-500 h-full text-white w-16 flex flex-col justify-between gap-4 items-center p-4">
            <Bars3Icon className="h-10 w-10" />
            <ArrowLeftOnRectangleIcon className="h-10 w-10" />
        </div>
    );
};

export default LeftSidebar;
