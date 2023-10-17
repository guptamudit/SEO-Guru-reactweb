import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [cost1, setCost1] = useState("$148");
  const [cost2, setCost2] = useState("$248");
  const [cost3, setCost3] = useState("$380");
  const [duration, setDuration] = useState("Month");
  function clickButton() {
    setCost1("$2,480");
    setCost2("$3480");
    setCost3("$4204");
    setDuration("Year");
  }
  function monthClick() {
    setCost1("$148");
    setCost2("$248");
    setCost3("$380");
  }

  return (
    <div className="bg-[#D0BFFF] h-auto ">
      <div className="flex flex-col items-center ">
        <div className="sm:text-6xl text-4xl mt-[80px] font-bold ">
          Membership Plans
        </div>
        <div className="mt-4 text-lg">
          Become a member today and Grow with SeoGuru
        </div>
        <div className="flex  flex-row mt-[36px]">
          <div className="mx-1 bg-orange-400 rounded-lg hover:shadow-lg hover:text-white hover:bg-[#A1CCD1]">
            <button
              className="w-[122px] p-2 font-medium"
              type="button"
              onClick={monthClick}
            >
              Pay Monthly
            </button>
          </div>
          <div className="bg-orange-400 rounded-lg mx-1">
            <button
              className="w-[122px] p-2 font-medium hover:shadow-lg  hover:text-white hover:bg-[#A1CCD1]"
              type="button"
              onClick={clickButton}
            >
              Pay Yearly
            </button>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col flex-col lg:flex-row justify-center p-[5rem] lg:space-x-4 space-y-4  lg:space-y-0">
        <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <Link
              to="/contact"
              class="font-bold text-xl mb-2 text-indigo-800"
              href="#"
            >
              Basic Plan
            </Link>
            <p class="text-gray-700 text-base">
              Contains Unlimited Data, Bandwith and Support System.
            </p>
          </div>
          <div class="py-4 border-t border-gray-200">
            <div class="flex justify-between px-6">
              <span class="text-gray-700">Price</span>
              <span class="text-indigo-700 font-bold">
                {cost1}/{duration}
              </span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Users</span>
              <span class="font-bold">1-5</span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Storage</span>
              <span class="font-bold">10 GB</span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Support</span>
              <span class="font-bold">24/7</span>
            </div>
          </div>
        </div>
        <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <Link to="/contact" class="font-bold text-xl mb-2 text-indigo-800">
              Advance Plan
            </Link>
            <p class="text-gray-700 text-base">
              Everything in Basic Plan + Asset Delivery and Messenger Support.
            </p>
          </div>
          <div class="py-4 border-t border-gray-200">
            <div class="flex justify-between px-6">
              <span class="text-gray-700">Price</span>
              <span class="text-indigo-700 font-bold">
                {cost2}/{duration}
              </span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Users</span>
              <span class="font-bold">1-7</span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Storage</span>
              <span class="font-bold">100 GB</span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Support</span>
              <span class="font-bold">24/7</span>
            </div>
          </div>
        </div>
        <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <Link to="/contact" class="font-bold text-xl mb-2 text-indigo-800">
              Custom Plan
            </Link>
            <p class="text-gray-700 text-base">
              Can be Customised as per your need.(Only Avalilabe Features)
            </p>
          </div>
          <div class="py-4 border-t border-gray-200">
            <div class="flex justify-between px-6">
              <span class="text-gray-700">Price</span>
              <span class="text-indigo-700 font-bold">
                {cost3}/{duration}
              </span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Users</span>
              <span class="font-bold">1-10</span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Storage</span>
              <span class="font-bold">Max 200 GB</span>
            </div>
            <div class="flex justify-between px-6 py-2">
              <span class="text-gray-700">Support</span>
              <span class="font-bold">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
