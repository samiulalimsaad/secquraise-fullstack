import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = ({ total }: { total: { male: number; female: number } }) => {
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
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder=""
                            className="input input-bordered bg-blue-700"
                        />
                        <button className="btn btn-square bg-blue-700">
                            <MagnifyingGlassIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                <button className="rounded-none text-xl btn btn-success">
                    {total.male}
                </button>
                <button className="rounded-none text-xl btn btn-error">
                    {total.female}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
