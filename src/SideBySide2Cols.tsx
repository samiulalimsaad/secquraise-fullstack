const SideBySide2Cols = () => {
    return (
        <div className="grid grid-cols-9">
            <div className="col-span-3">
                <span>Name</span>:
            </div>
            <div className="col-span-6 bg-error">Value</div>
        </div>
    );
};

export default SideBySide2Cols;
