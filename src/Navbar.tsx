const Navbar = () => {
    return (
        <div className="navbar bg-blue-800 text-white">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl uppercase text-success first-letter:text-success">
                    Secqur
                    <span className="text-error">ai</span>
                    se
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered bg-blue-700"
                    />
                </div>
                <button className="rounded-none text-xl btn btn-success">
                    25
                </button>
                <button className="rounded-none text-xl btn btn-error">
                    25
                </button>
            </div>
        </div>
    );
};

export default Navbar;
