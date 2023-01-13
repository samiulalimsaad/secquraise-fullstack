import SideBySide2Cols from "./SideBySide2Cols";

const EventDetails = () => {
    return (
        <div className="">
            <h2 className="text-center">Gender</h2>
            <div className="grid grid-cols-2">
                <div>
                    <div className="text-xl font-semibold">
                        <h3>EVT0050</h3>
                        <h3>Person Detected</h3>
                    </div>

                    <div>
                        <SideBySide2Cols />
                        <SideBySide2Cols />
                        <SideBySide2Cols />
                        <SideBySide2Cols />
                        <SideBySide2Cols />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default EventDetails;
