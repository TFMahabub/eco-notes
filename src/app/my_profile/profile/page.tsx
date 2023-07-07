import MyProfileBody from "../../../../components/pages/ProfilePage/myProfile/MyProfileBody";
import MyProfileDeviceActivities from "../../../../components/pages/ProfilePage/myProfile/MyProfileDeviceActivities";
import MyProfileHeader from "../../../../components/pages/ProfilePage/myProfile/MyProfileHeader";

const page = () => {
  return (
    <section className="space-y-16 p-6">
      {/* top-header */}
      <div className="flex items-center justify-between">
        <MyProfileHeader />
      </div>
      {/* body */}
      <div className="flex gap-10">
        <MyProfileBody />
      </div>
      {/* device-activities */}
      <div className="space-y-common">
        <MyProfileDeviceActivities />
      </div>
    </section>
  );
};

export default page;
