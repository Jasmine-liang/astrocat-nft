import React from "react";

const PartnerItem = (props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-5 mx-2 md:space-x-5">
      <img src={props.imageUrl} alt="" />
      <a className="text-center" href={props.socialUrl}>
        {props.name}
      </a>
    </div>
  );
};

function Partner() {
  return (
    <section className="layout">
      {/* 赞助 */}

      <div className="w-full my-28 text-white text-xl flex justify-evenly ">
        <PartnerItem
          name="得意忘形播客"
          imageUrl="/images/dywx1.png"
          socialUrl="https://podcasts.apple.com/us/podcast/%E5%BE%97%E6%84%8F%E5%BF%98%E5%BD%A2%E6%92%AD%E5%AE%A2/id1200767928"
        />
        <PartnerItem
          name="BeWater Community"
          imageUrl="/images/bewater.png"
          socialUrl="https://twitter.com/bewaterofficial?s=11"
        />
        <PartnerItem
          name="Blockchain Art"
          imageUrl="/images/bca.png"
          socialUrl="https://www.blockchain.art/"
        />
      </div>
    </section>
  );
}

export default Partner;
