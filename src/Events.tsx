import { ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import Event from "./Event";
import { database } from "./firebase.init";

const Events = () => {
    const [snapshots, loading, error] = useList(ref(database, "/"));

    console.log(snapshots);

    return (
        <div>
            {error && <strong>Error: {error.message}</strong>}
            {loading && <span>List: Loading...</span>}
            {!loading &&
                snapshots &&
                snapshots.map((v) => <Event key={v.key} event={v.val()} />)}
        </div>
    );
};

export default Events;
