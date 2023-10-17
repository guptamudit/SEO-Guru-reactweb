import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section class="mb-10 bg-[#CD5C08]">
        <div class="px-6 py-12 text-center md:px-12 lg:text-left">
          <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div class="grid items-center gap-12 lg:grid-cols-2">
              <div class="mt-12 lg:mt-0">
                <h1 class="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                  Grow Online with the <br />
                  <span class="text-[hsl(218,81%,75%)]">
                    ROI-Driven SEO Agency
                  </span>
                </h1>
                <Link
                  to="/contact"
                  class="mb-2  inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,75%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  role="button"
                >
                  Get started
                </Link>
              </div>
              <div class="mb-12 lg:mb-0">
                <img
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1850378583.1697328000&semt=ais"
                  class="lg:w-full 
               hidden lg:block  lg:ml-0 rounded-lg shadow-lg dark:shadow-black/20 lg:h-[365px] "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 mb-10">
        <div className="flex flex-col w-100 mx-auto 	">
          <div className="text-center text-4xl lg:text-6xl font-bold">
            What Do We Offer You
            <br />
            as an SEO Agency?
          </div>
          <div className="text-center text-gray-500 lg:text-lg mt-10">
            We are a leading SEO agency with a passion for helping
            <br />
            businesses thrive in the digital landscape.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5 lg:mt-5 justify-center items-center">
          <div className="bg-[#A1CCD1] w-[450px] h-[200px] mx-10 rounded-2xl relative ">
            <div className="absolute flex flex-row items-center">
              <img
                className="mt-[28px] ml-[25px]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64d736435b9d53be4eaa8480_1.svg"
                alt=""
              />
              <p className="mx-[33px] mt-[51.75px]">
                <span className="font-bold">Keyword Research</span>
                <br />
                <span>
                  Email Marketing - Upside lets you create brilliant campaigns
                  of all kind of customers.
                </span>
              </p>
            </div>
          </div>
          <div className="bg-[#E9B384] w-[450px] h-[200px] mx-10 rounded-2xl mt-5 lg:mt-0 relative">
            <div className="absolute flex flex-row items-center">
              <img
                className="mt-[45px] ml-[25px]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64d73643d8b2c979aa7aeb49_2.svg"
                alt=""
              />
              <p className="mx-[33px] mt-[51.75px]">
                <span className="font-bold"> On-Page Optimization</span>
                <br />
                <span>
                  Email Marketing - Upside lets you create brilliant campaigns
                  of all kind of customers.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5 justify-center items-center">
          <div className="bg-[#F4F2DE] w-[450px] h-[200px] mx-10 rounded-2xl relative">
            <div className="absolute flex flex-row items-center">
              <img
                className="mt-[45px] ml-[25px]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64d73643391ca911def48b92_4.svg"
                alt=""
              />
              <p className="mx-[33px] mt-[51.75px]">
                <span className="font-bold"> Content Marketing</span>
                <br />
                <span>
                  Email Marketing - Upside lets you create brilliant campaigns
                  of all kind of customers.
                </span>
              </p>
            </div>
          </div>
          <div className="bg-[#ADE4DB] w-[450px] h-[200px] mx-10 rounded-2xl mt-5 lg:mt-0 relative">
            <div className="absolute flex flex-row items-center">
              <img
                className="mt-[45px] ml-[25px]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64d736447a2a36cb647f5e0f_3.svg"
                alt=""
              />
              <p className="mx-[33px] mt-[51.75px]">
                <span className="font-bold"> SEO Reporting</span>
                <br />
                <span>
                  Email Marketing - Upside lets you create brilliant campaigns
                  of all kind of customers.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[113px] ">
        <div className="bg-[#ADE4DB]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly lg:ml-[183px] ">
            <div>
              <img
                className="lg:w-[320px] w-[280px] mt-[3.5rem]"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64d7757189f7a212efd1ef77_Mobile%20First%20Approach-p-800.webp"
                alt=""
              />
            </div>
            <div className="ml-[90px]">
              <p className="lg:text-5xl text-4xl font-bold mt-[20px] lg:mt-0">
                Mobile First Approach for{" "}
                <span className="text-[hsl(218,81%,75%)]">Conversion</span>
              </p>
              <br />
              <p className="text-xl">
                A reliable SEO agency will keep clients
                <br />
                informed about the progress of their
                <br />
                campaigns, share regular reports.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F2DE]">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-evenly lg:mr-[63px]  lg:mt-0 ">
            <div>
              <img
                className="lg:w-[400px] w-[280px] mt-[3.5rem] lg:mb-[30px] mb-7"
                src="https://uploads-ssl.webflow.com/64d1105c4d56246119187a1b/64d77570cfd44ca4dd5629d0_Social%20Media%20Integration.webp"
                alt=""
              />
            </div>
            <div className="ml-[90px] mt-[20px] lg:mt-0">
              <p className="lg:text-5xl text-4xl font-bold">
                Social Media Integration for <br />
                <span className="text-[hsl(218,81%,75%)]">SEO Synergy</span>
              </p>
              <br />
              <p className="text-xl">
                Keep clients informed about the progress of
                <br />
                their campaigns, share regular reports, and
                <br />
                be readily available to answer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
