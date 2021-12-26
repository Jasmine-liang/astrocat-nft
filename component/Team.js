import React from "react";
import {  profile } from "../utils/data.js";
const ProfileItem = ({ profile }) => {
  return (
    <div className="md:flex md:flex-col md:justify-center items-center">
      <img className="md:w-48 my-5 border-4 rounded-lg border-black" src={profile.imageUrl} alt="" />
      <div className="">
        <h1 className="text-xl md:text-2xl text-center text-white  font-fredoka-one">
          {profile.name}
        </h1>
        <h1 className="font-roboto text-base md:text-lg text-center text-white">
          {profile.title}
        </h1>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <section id="team" className=" layout my-20 gap-14 md:my-40">
      <div className="relative">  
      <div className="absolute left-40">
        <img src="/images/meet-team.png" alt="" />
      </div>
      <div className="w-full flex flex-col justify-center md:space-x-20">
        <h1 className="mb-10 md:mb-20 text-white text-4xl md:text-5xl font-bold font-fredoka-one ">
          Meet Our Team
        </h1>
        <div className=" grid grid-cols-2 gap-4 md:grid-cols-3">
          {profile.map((profile) => (
            <ProfileItem key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
