import { MouseEventHandler, useEffect, useState } from "react";
import { filterInterface } from "../interface/filterInterface";

const CheckBox = ({
    filter,
    value,
    onClick,
}: {
    filter: filterInterface | null;
    value: string;
    onClick: MouseEventHandler<HTMLLabelElement>;
}) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(value === filter?.value);
    }, [filter]);

    return (
        <div className="form-control">
            <label
                className="cursor-pointer label justify-start gap-4"
                onClick={onClick}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    className="checkbox checkbox-success"
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <span className="label-text capitalize">{value}</span>
            </label>
        </div>
    );
};

export default CheckBox;
