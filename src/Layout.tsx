import LeftSidebar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";

const Layout = () => {
    return (
        <div className="h-[calc(100vh-4rem)] grid grid-cols-3">
            <LeftSidebar />
            <div>Content</div>
            <RightSideBar />
        </div>
    );
};

export default Layout;
