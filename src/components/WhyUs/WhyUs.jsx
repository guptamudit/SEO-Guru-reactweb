import React, { useState } from "react";

function WhyUs() {
  const [card1, setCard1] = useState("visible");
  const [card2, setCard2] = useState("hidden");
  const [card3, setCard3] = useState("hidden");

  function visible1() {
    setCard1("visible");
    setCard2("hidden");
    setCard3("hidden");
  }
  function visible2() {
    setCard1("hidden");
    setCard2("visible");
    setCard3("hidden");
  }
  function visible3() {
    setCard1("hidden");
    setCard2("hidden");
    setCard3("visible");
  }
  return (
    <>
      <section className="p-10">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <div className="">
            <p className="text-gray-800 font-bold text-6xl p-6">
              Why Should You <br className="hidden sm:block" />
              Hire SeoGuru?
            </p>
          </div>
          <div className="">
            <p className="p-6 text-lg text-gray-600">
              We understand that in today's competitive online{" "}
              <br className="hidden sm:block" />
              world, <span className="text-black">
                a strong SEO strategy
              </span>{" "}
              is crucial for businesses <br className="hidden sm:block" />
              to succeed.{" "}
              <span className="text-black">Our data-driven approach</span> and
              in-depth
              <br className="hidden sm:block" /> industry knowledge enable.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-[hsl(218,81%,75%)] p-[66px] w-auto">
        <div className="">
          <div className=" flex lg:flex-row flex-col items-center  justify-evenly mb-6 ">
            <div className="">
              <button
                onClick={visible1}
                className="text-xl font-bold rounded-lg p-[12px]"
              >
                Increased ROI by 50%
              </button>
            </div>
            <div>
              <button
                onClick={visible2}
                className="text-xl font-bold  rounded-lg p-[12px]"
              >
                Amazing Online Campaign
              </button>
            </div>
            <div>
              <button
                onClick={visible3}
                className="text-xl font-bold  rounded-lg p-[12px]"
              >
                Google Ads Revenue
              </button>
            </div>
          </div>
        </div>
        <div className={card1}>
          <div className="h-auto rounded-3xl bg-white flex flex-col lg:flex-row items-center lg:items-start">
            <div className="flex flex-col p-10 ">
              <div className="">
                <img
                  src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64db15362868255d11a1624c_Paytime%20Client.svg"
                  alt=""
                />
              </div>
              <div className="mt-10">
                <p className="text-4xl">
                  “SeoGuru has been an integral
                  <br />
                  part of our digital marketing
                  <br />
                  ideas and strategy.”
                </p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="font-bold">Linda Miller</span>
                  <br />
                  <span className="text-gray-500">CEO of Paytimes</span>
                </p>
              </div>
            </div>
            <div className="p-[45px] lg:ml-[100px]">
              <img
                className="lg:w-[280px] w-[460px]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64db14932e6bf957fa2822c7_Client%20Image.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={card2}>
          <div className="h-auto rounded-3xl bg-white flex flex-col lg:flex-row items-center lg:items-start">
            <div className="flex flex-col p-10 ">
              <div className="">
                <img
                  src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64db15362868255d11a1624c_Paytime%20Client.svg"
                  alt=""
                />
              </div>
              <div className="mt-10">
                <p className="text-4xl">
                  “SeoGuru has been an integral
                  <br />
                  part of our Online Campaigning
                </p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="font-bold">Martin Swiss</span>
                  <br />
                  <span className="text-gray-500">COO of Paytimes</span>
                </p>
              </div>
            </div>
            <div className="p-[45px] lg:ml-[82px]">
              <img
                className="lg:w-[280px] w-[460px]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64f333efc6cb32a5649e6431_Mask%20group.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={card3}>
          <div className="h-auto rounded-3xl bg-white flex flex-col lg:flex-row items-center lg:items-start">
            <div className="flex flex-col p-10 ">
              <div className="">
                <img
                  src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64db15362868255d11a1624c_Paytime%20Client.svg"
                  alt=""
                />
              </div>
              <div className="mt-10">
                <p className="text-4xl">
                  “SeoGuru has been Providing
                  <br />
                  fabulous support in managing
                  <br />
                  Google ads revenue.”
                </p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="font-bold">Josh Smith</span>
                  <br />
                  <span className="text-gray-500">CFO of Paytimes</span>
                </p>
              </div>
            </div>
            <div className="p-[45px] lg:ml-[100px]">
              <img
                className="lg:w-[280px] w-[460px]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64f3340e098c06f3f745e8d2_Mask%20group-1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
