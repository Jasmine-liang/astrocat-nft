import React from "react";
import { timelineData } from "../utils/data";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.imageUrl} alt="" />
      <div className="flex flex-row  items-center ">
        <h1 className=" font-fredoka-one my-5 md:my-10 text-white md:text-2xl ">
          {item.date}
        </h1>
    
      </div>
      <div>
        <h1 className="text-white font-fredoka-one md:text-4xl">{item.title}</h1>
      </div>
      <div className="text-gray-500 md:text-2xl my-5 md:my-20">
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <section id="roadmap" className="layout my-20  md:my-40">
      <div className="w-full  flex flex-col md:flex md:flex-row md:space-x-40 space-y-5">
        <h1 className="mb-10 text-white text-4xl md:text-5xl font-bold font-fredoka-one ">
          RoadMap
        </h1>
        <div className=" grid grid-cols-2 gap-2 md:gap-10">
          {timelineData.map((item, index) => {
            return  <Item item={item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  );
}
