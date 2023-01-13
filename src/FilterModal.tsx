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

    const dateFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(e.target.value);

        const temp = `${date.getDate()}-${date.toLocaleString("en-us", {
            month: "short",
            year: "2-digit",
        })}`;

        setFilter({ key: "Date", value: temp.replaceAll(" ", "-") });
    };

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
                        <div className="form-control my-4">
                            <div className="input-group ">
                                <input
                                    type="date"
                                    placeholder="Enter a date"
                                    className="input input-bordered w-full"
                                    onChange={dateFieldHandler}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="modal-action">
                    <button
                        className="btn btn-warning"
                        onClick={(e) => {
                            setFilter({ key: "Location", value: "" });
                        }}
                    >
                        Reset
                    </button>
                    <a href="#" className="btn btn-success">
                        Ok
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
