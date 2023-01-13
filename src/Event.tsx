const Event = () => {
    return (
        <div className="card w-full bg-slate-200 rounded-none my-3 hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
            <div className="card-body p-2">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">EVT0050: Chennai</h2>
                    <div className="flex items-center justify-between gap-2">
                        <span>1/2/3</span>
                        <span>1/2/3</span>
                    </div>
                </div>
                <p>Description</p>
            </div>
        </div>
    );
};

export default Event;
