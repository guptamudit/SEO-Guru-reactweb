import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  async function register(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        body: JSON.stringify({ userName, email }),
        headers: { "content-type": "application/json" },
      });
    } catch (e) {
      alert("Error!");
    }
  }
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  let nameOfUser = userName;
  let id = email;
  const [userDiag, setUserDiag] = useState("hidden");

  function submitData() {
    setUserDiag("visible");
  }
  return (
    <>
      <div className=" flex items-top justify-center h-auto  sm:items-center sm:pt-0 bg-[#ADE4DB]">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-0 mb-[20px]">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-[#F4F2DE] sm:rounded-lg">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    NewFound Inc, Belfast, Helma,
                    <br /> 201-780
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +44 1234567890
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    SEOGURU@acme.org
                  </div>
                </div>
              </div>

              <form
                onSubmit={register}
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex flex-col">
                  <label for="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  href="#"
                  type="submit"
                  className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                  onClick={submitData}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className={userDiag}>
        <div className="bg-[#F4F2DE] ">
          <div className="flex justify-center">
            <div className="w-[350px] h-[100px] bg-[#ADE4DB] mt-4 mb-4 rounded-lg  flex justify-center items-center">
              <div className="text-center">
                Thank You for Choosing us{" "}
                <span className="font-bold">{nameOfUser}</span>
                <br />
                Email has been sent to you on:{" "}
                <span className="font-bold">{id}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
