import React from "react";

function AboutUs() {
  return (
    <section className="layout" id="aboutus">
    <div className="flex  space-y-10 md:space-x-36 flex-col md:flex-row md:my-40 w-full justify-center items-center" >
      <div className=" ">
        <img  src="/images/aboutus.png" alt="" />
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-4xl text-white md:text-5xl font-bold font-fredoka-one md:mb-5" >About Us</h1>
        <div className="text-white text-base md:text-xl flex flex-col space-y-3">
          <p>
          领航猫是 UnknownPark 的首位成员，是每位 UnknownDAO 成员在 Metaverse 的虚拟身份。AstroCat 代表 UnknownPark 踏出探索 Web3.0 的第一步，和它结缘的你将会同它一起踏上浩瀚的 Web3.0 之旅。
          </p>
          <p>
          这场旅行中领航猫终将遇到散落在宇宙中的同伴，一起建立起他们自己的 Utopia——UnknownPark。
          </p>
        </div>
      </div>
    </div>

</section>
  );
}

export default AboutUs;
