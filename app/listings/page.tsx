import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Listings = () => {
  return (
    <div>
      <div>
        <Button className="flex justify-center items-center rounded-full px-4 py-2 mt-8 ml-8">
          <ChevronLeft />
          <a href="/">Back</a>
        </Button>
        <div>
          <div className="container relative mt-8">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="md:text-4xl mb-4 md:leading-normal text-2xl leading-normal font-semibold">
                Explore all Property NFT Listings
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                <div className="relative">
                  <Image src="/assets/dream-house.jpg" alt="" layout="fill" />

                  <div className="absolute top-4 end-4">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                    >
                      <i className="mdi mdi-heart text-[20px]"></i>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="pb-6">
                    <a
                      href="property-detail.html"
                      className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                    >
                      10765 Hillshire Ave, Baton Rouge, LA 70810, USA
                    </a>
                  </div>

                  <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                    <li className="flex items-center me-4">
                      <i className="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                      <span>8000sqf</span>
                    </li>

                    <li className="flex items-center me-4">
                      <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                      <span>4 Beds</span>
                    </li>

                    <li className="flex items-center">
                      <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                      <span>4 Baths</span>
                    </li>
                  </ul>

                  <ul className="pt-6 flex justify-between items-center list-none">
                    <li>
                      <span className="text-slate-400">Price</span>
                      <p className="text-lg font-medium">$5000</p>
                    </li>

                    <li>
                      <span className="text-slate-400">Rating</span>
                      <ul className="text-lg font-medium text-amber-400 list-none">
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline text-black dark:text-white">
                          5.0(30)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                <div className="relative">
                  <Image src="/assets/dream-house.jpg" alt="" layout="fill" />

                  <div className="absolute top-4 end-4">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                    >
                      <i className="mdi mdi-heart text-[20px]"></i>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="pb-6">
                    <a
                      href="property-detail.html"
                      className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                    >
                      59345 STONEWALL DR, Plaquemine, LA 70764, USA
                    </a>
                  </div>

                  <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                    <li className="flex items-center me-4">
                      <i className="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                      <span>8000sqf</span>
                    </li>

                    <li className="flex items-center me-4">
                      <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                      <span>4 Beds</span>
                    </li>

                    <li className="flex items-center">
                      <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                      <span>4 Baths</span>
                    </li>
                  </ul>

                  <ul className="pt-6 flex justify-between items-center list-none">
                    <li>
                      <span className="text-slate-400">Price</span>
                      <p className="text-lg font-medium">$5000</p>
                    </li>

                    <li>
                      <span className="text-slate-400">Rating</span>
                      <ul className="text-lg font-medium text-amber-400 list-none">
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline text-black dark:text-white">
                          5.0(30)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                <div className="relative">
                  <Image src="/assets/dream-house.jpg" alt="" layout="fill" />

                  <div className="absolute top-4 end-4">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"
                    >
                      <i className="mdi mdi-heart text-[20px]"></i>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="pb-6">
                    <a
                      href="property-detail.html"
                      className="text-lg hover:text-green-600 font-medium ease-in-out duration-500"
                    >
                      3723 SANDBAR DR, Addis, LA 70710, USA
                    </a>
                  </div>

                  <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                    <li className="flex items-center me-4">
                      <i className="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                      <span>8000sqf</span>
                    </li>

                    <li className="flex items-center me-4">
                      <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                      <span>4 Beds</span>
                    </li>

                    <li className="flex items-center">
                      <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                      <span>4 Baths</span>
                    </li>
                  </ul>

                  <ul className="pt-6 flex justify-between items-center list-none">
                    <li>
                      <span className="text-slate-400">Price</span>
                      <p className="text-lg font-medium">$5000</p>
                    </li>

                    <li>
                      <span className="text-slate-400">Rating</span>
                      <ul className="text-lg font-medium text-amber-400 list-none">
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline">
                          <i className="mdi mdi-star"></i>
                        </li>
                        <li className="inline text-black dark:text-white">
                          5.0(30)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
