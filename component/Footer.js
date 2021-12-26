import React from "react";

function Footer() {
  return (
    <section id="footer" className="layout">
      <div className=" mb-10 flex flex-col justify-center items-center">
        <img className="mt-20" src="/Logo.svg" alt="" />
        <h1 className="my-5 text-white text-2xl text-center">
          Join us. Meet Metaverse and DAO Now.
        </h1>
        <div className="flex space-x-10">
          <a
            href="https://twitter.com/UnknownDAO_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter.png" alt="" />
          </a>
          <a
            href="https://discord.com/invite/udao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/discord.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
