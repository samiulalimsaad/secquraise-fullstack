import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useState } from "react";
import CheckBox from "./CheckBox";

import { filterInterface } from "./RightSideBar";

const allFilter = ["Location", "Gender", "Date"];
const locationFilter = ["Chennai", "Hyderabad", "Bangalore"];

const FilterModal = ({
    filter,
    setFilter,
}: {
    filter: filterInterface | null;
    setFilter: Dispatch<SetStateAction<filterInterface | null>>;
}) => {
    const [tab, setTab] = useState(allFilter[0]);
    const [input, setInput] = useState("");

    return (
        <div className="modal" id="filter-modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-center">
                    Add Filter for Location, Gender & Date
                </h3>
                <div className="divider"></div>
                <div className="tabs w-full">
                    {allFilter.map((f) => (
                        <a
                            key={f}
                            className={`w-1/3 tab tab-lifted ${
                                tab === f ? "tab-active" : ""
                            }`}
                            onClick={() => {
                                setTab(f);
                                setFilter({ key: "Location", value: "" });
                            }}
                        >
                            {f}
                        </a>
                    ))}
                </div>
                {tab === "Location" &&
                    locationFilter.map((l) => (
                        <CheckBox
                            key={l}
                            value={l}
                            filter={filter}
                            onClick={() => {
                                setFilter({ key: "Location", value: l });
                            }}
                        />
                    ))}
                {tab === "Gender" &&
                    ["Male", "Female"].map((l) => (
                        <CheckBox
                            key={l}
                            value={l}
                            filter={filter}
                            onClick={() => {
                                setFilter({ key: "Gender", value: l });
                            }}
                        />
                    ))}
                {tab === "Date" && (
                    <div>
                        <form
                            className="form-control my-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setFilter({ key: "Date", value: input });
                            }}
                        >
                            <div className="input-group ">
                                <input
                                    type="text"
                                    placeholder="Enter a date"
                                    className="input input-bordered w-full"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button
                                    className="btn btn-square"
                                    type="submit"
                                >
                                    <MagnifyingGlassIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                <div className="modal-action">
                    <a href="#" className="btn">
                        Ok
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
