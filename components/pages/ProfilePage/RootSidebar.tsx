import UserInfoTopMenu from "../../shared/UserInfo/UserInfoTopMenu";
import RootSidebarAllMenus from "./RootSidebarAllMenus";

const RootSidebar = () => {
    return (
        <>
            {/* ------------user-info------------ */}
            <div className="flex items-center justify-start gap-common px-common-1 py-common bg-bg-white pt-4 border-b border-border-light dark:border-border-dark">
                <UserInfoTopMenu />
            </div>
            {/* --------all-menues------ */}
            <div className="space-y-common">
                <RootSidebarAllMenus />
            </div>
        </>
    );
};

export default RootSidebar;