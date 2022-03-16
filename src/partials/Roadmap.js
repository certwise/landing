import React from "react";
import Accordion from "../utils/Accordion";

function Roadmap() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center">
          {/* Left: Title */}
          <div className="max-w-3xl mx-auto text-center pb-10">
            <h2 className="h3">Roadmap ✨</h2>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="max-w-3xl m-auto mt-2">
            {/* Posts */}
            <div className="xl:-translate-x-16">
              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 flex-shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-gray-800 xl:leading-7 mb-4 xl:mb-0">
                      2021 Q1
                    </h2>
                  </div>
                  <div className="flex-grow pb-6 border-b border-gray-200">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        <div className="text-gray-400">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">
                            Completed
                          </div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Product V1 - Early Access
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Web3 Compatibility
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Proof-of-Funds Compliance Key
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Activity Feed Integration
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 flex-shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-gray-800 xl:leading-7 mb-4 xl:mb-0">
                      2021 Q2
                    </h2>
                  </div>
                  <div className="flex-grow pb-6 border-b border-gray-200">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        <div className="text-gray-400">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                            Working on
                          </div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Product V1 - Early Access
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Web3 Compatibility
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-indigo-500"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M14.4 8.4L13 7l-4 4-2-2-1.4 1.4L9 13.8z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Proof-of-Funds Compliance Key
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 rounded-full bg-white"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-gray-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Activity Feed Integration
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 flex-shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-gray-800 xl:leading-7 mb-4 xl:mb-0">
                      2021 Q3
                    </h2>
                  </div>
                  <div className="flex-grow pb-6 border-b border-gray-200">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        <div className="text-gray-400">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-yellow-100 text-yellow-600 rounded-full text-center px-2.5 py-1">
                            Planned
                          </div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-white"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-gray-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Product V1 - Early Access
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 rounded-full bg-white"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-gray-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Web3 Compatibility
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Post */}
              <article className="pt-6">
                <div className="xl:flex">
                  <div className="w-32 flex-shrink-0">
                    <h2 className="text-xl leading-snug font-bold text-gray-800 xl:leading-7 mb-4 xl:mb-0">
                      2021 Q4
                    </h2>
                  </div>
                  <div className="flex-grow pb-6 border-b border-gray-200">
                    <header>
                      <div className="flex flex-nowrap items-center space-x-2 mb-6">
                        <div className="text-gray-400">·</div>
                        <div>
                          <div className="text-xs inline-flex font-medium bg-yellow-100 text-yellow-600 rounded-full text-center px-2.5 py-1">
                            Planned
                          </div>
                        </div>
                      </div>
                    </header>
                    {/* List */}
                    <ul className="-my-2">
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 h-full w-0.5 bg-gray-200 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="absolute left-0 rounded-full bg-white"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-gray-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Product V1 - Early Access
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                      {/* List item */}
                      <li className="relative py-2">
                        <div className="flex items-center mb-1">
                          <div
                            className="absolute left-0 rounded-full bg-white"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-5 h-5 fill-current text-gray-400"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 pl-9">
                            Web3 Compatibility
                          </h3>
                        </div>
                        <div className="pl-9">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
