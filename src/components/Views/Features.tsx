import { FaRegClock } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoCashOutline } from "react-icons/io5";
import { TbSteeringWheel } from "react-icons/tb";

import { FEATURES_DATA } from "@/constant";

export default function Features() {
  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FaRegClock />;
      case 2:
        return <BiSupport />;
      case 3:
        return <IoCashOutline />;
      case 4:
        return <TbSteeringWheel />;
      default:
        return <TbSteeringWheel />;
    }
  };

  const getIconBgColor = (id: number) => {
    switch (id) {
      case 1:
        return "bg-grey-100";
      case 2:
        return "bg-yellow-100";
      case 3:
        return "bg-green-100";
      case 4:
        return "bg-purple-100";
      default:
        return "bg-yellow-100";
    }
  };

  return (
    <div className="min-h-screen md:min-h-screen py-5 md:py-0">
      <div className="flex flex-col py-6 md:py-35 max-w-[90vw] mx-auto px-4 lg:px-8">
        <h3 className="text-xl md:text-2xl font-light text-text-300 py-2 md:py-3 uppercase">
          Taking care of every client
        </h3>
        <h1 className="text-4xl md:text-7xl font-bold text-text-500 py-2 md:py-3">
          Key Features
        </h1>
        <p className="text-base md:text-lg text-text-500 py-2 md:py-3">
          We have the best cars available in Nepal <br />
          and we provide the best cars and
          <br /> services to you.
        </p>
      </div>
      <div className="flex flex-col max-w-[90vw] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 w-full justify-between">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start h-[10rem] md:h-[15rem] lg:h-[20rem] p-6 rounded-lg w-full md:w-[17rem] border-1 border-text-300/40"
            >
              <div
                className={`w-12 h-12 rounded-full ${getIconBgColor(
                  feature.id
                )} flex items-center justify-center`}
              >
                <div className="text-2xl text-text-500">
                  {getIcon(feature.id)}
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-medium text-text-500">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
