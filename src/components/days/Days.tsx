import { Divider } from "@mantine/core";
import React from "react";
import TaskCard from "../taskCard/TaskCard";



const Days = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="flex gap-4 items-center  mx-auto font-semibold p-2 m-1  ">
  {daysOfWeek.map((day, index) => (
          <div className="w-400 px-4 py-2 w-2/12 border h-screen rounded-lg text-center " key={index}> 
          {day}
          <Divider my="md" />   
            <TaskCard/> 
            <TaskCard/> 
            <TaskCard/> 
          </div>
        ))}
  </div>
  );
};

export default Days;
