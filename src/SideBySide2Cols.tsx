const SideBySide2Cols = ({ name, value }: { name: string; value: string }) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <span className="capitalize">{name}</span>:
            </div>
            <div className="col-span-10">{value}</div>
        </div>
    );
};

export default SideBySide2Cols;
