import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const MainHeader = () => {
  return (
    <div className="border-b border-gra py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackkish">
          MJ Collection
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 p-2 border px-4 rounded-lg w-full"
            placeholder="Enter Product name"
          />

          <BsSearch
            size={20}
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -transalte-y-1">
              0
            </div>
          </div>

          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -transalte-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
