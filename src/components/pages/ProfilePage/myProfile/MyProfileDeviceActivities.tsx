import ButtonPrimary from "@/app/Utils/ReUseAbleComponents/ButtonPrimary";
import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";
import { WindowsIcon } from "../../../Icons/WindowsIcon";

const MyProfileDeviceActivities = () => {
  const data = [1, 2, 3];
  return (
    <>
      <div className="text-center">
        <TextSecondaryTitle>Device Activity</TextSecondaryTitle>
      </div>
      <div>
        <table className="w-full whitespace-nowrap colorText">
          <thead>
            <tr className="h-16 w-full text-md font-inter sticky top-0 z-[1] bg-secondary-light/10">
              <th className="text-start bg-gray-5 font-semibold text-sm pl-4">
                {/* Browser */}
                Serial
              </th>
              <th className="text-start bg-gray-5 font-semibold text-sm pl-12">
                {/* Device */}
                Platform
              </th>
              <th className="text-start bg-gray-5 font-semibold text-sm pl-12">
                {/* Location */}
                Date
              </th>
              <th className="text-start bg-gray-5 font-semibold text-sm pl-20">
                {/* Last Activity */}
                Action
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data.map((dt: any) => (
              <tr key={dt} className="h-14 text-xs hover:bg-secondary-light/10">
                <td className="pl-4">
                  <div className="flex gap-2 items-center">
                    {/* <ChromeIcon /> */}
                    <span className=" text-sm font-normal">{dt}</span>
                  </div>
                </td>
                <td className="pl-12 text-sm font-normal">
                  <span className="flex items-center gap-1">
                    {" "}
                    <WindowsIcon className="h-[20px] w-[20px] fill-[#0177DB]" />{" "}
                    Windows10
                  </span>
                </td>
                <td className="pl-12 text-sm font-normal">
                  <span className="">18-04-2023 10:02 PM</span>
                </td>
                <td className="pl-20 text-sm font-normal">
                  <ButtonPrimary>Remove</ButtonPrimary>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProfileDeviceActivities;
