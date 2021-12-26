import React from "react";


function Faqs() {
  return (
    <section id="faqs " className="bg-primary-200 " >
      <div className="layout text-white md:px-40">
        <div className=" flex flex-col ">
          <h1 className="my-20   text-4xl md:text-5xl font-bold font-fredoka-one ">
            FAQS
          </h1>
          <div className="flex flex-col ">
            <div className=" md:my-20   flex  flex-col space-y-10">
              <h1 className="text-xl md:text-5xl font-bold ">NFT 是什么?</h1>
              <p className="md:text-2xl  ">
                NFT 是
                “非同质化代币”的意思，它是一种独特的、独一无二的数字物品，用户可以购买、拥有和交易。一些
                NFT
                的主要功能是看起来很酷的数字艺术，一些提供额外的效用，如独家访问网站或参与某个活动的`会员`卡。
              </p>
            </div>
            <div className="my-10 flex flex-col space-y-10">
              <h1 className="text-xl  md:text-5xl font-bold ">去哪里购买?</h1>
              <div className="">
                       <p className="md:text-2xl">
              (1. 点击最上方的 CONNECT WALLET 按钮，在 MetaMask 钱包上点击同意连接
              </p>
              <p className="md:text-2xl ">
              (2. 连接钱包成功后，按钮变成 “SWITCH NETWORK” 字样，点击按钮在 Metamask 上切换网络到 Matic polygon 网络
              </p>
              <p className="md:text-2xl ">
                (3. 成功切换网络后，按钮变成	“MINT” 字样，点击按钮购买
              </p> 
              </div>
      
            </div>

            <div className="flex flex-col  md:my-20 text-white space-y-10">
              <h1 className=" md:text-5xl font-bold ">持有领航猫 NFT 有什么用吗？</h1>
              <p className="md:text-2xl ">
              持有 NFT 可以参与社区的治理权和后续空投的资格。随着社区发展 NFT 有很大的升值潜力。
              </p>
            </div>
            <div className="my-10 flex-col md:my-20 text-white flex  space-y-10">
              <h1 className="text-xl md:text-5xl font-bold ">开盲盒之后去哪里找 NFT？</h1>
              <p className="md:text-2xl ">
              盲盒开启后，请上 opensea.io 网页。连接小狐狸钱包，在 Profile 下边的 Colleted 界面可以找到。如果图片还没有显示出来请点击 「refresh metadata」进行刷新，静静等待 NFT 的开启吧！
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
