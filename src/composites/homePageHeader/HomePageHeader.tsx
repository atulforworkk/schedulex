import LightDarkButton from "@/components/Mode/LightDarkButton";
import React from "react";
import AgentInfo from "../../"
type Props = {};

const HomePageHeader = (props: Props) => {
  return (
    <div className="h-[7vh]  flex items-center justify-between p-2">
      <div className="flex">
        <span className="text-xl border p-1 font-bold">SX </span>
        <h1 className="text-xl p-1 font-semibold">Schedulex</h1>
      </div>

      <LightDarkButton />
    </div>
  );
};

export default HomePageHeader;
