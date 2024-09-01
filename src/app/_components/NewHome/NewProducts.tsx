"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

// Images
import Image from "next/image";
import UserImg from "../../../../public/assets/image.png";
import Quotes from "../../../../public/assets/Logoimage.png";
import BannerImg from "../../../../public/assets/banner-2.webp";

const NewProducts = () => {
  const [getData, setgetData] = useState([]);
  const getProductData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setgetData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-20 xl:gap-y-10">
        {getData?.map((d, idx) => {
          return (
            <div className="container" key={idx}>
              <ProductCard
                image={d.image}
                name={d.category}
                desc={d?.title}
                rating={Math.round(d?.rating?.rate)}
                price={d?.price}
              />
            </div>
          );
        })}
      </div>

      {/* Testimonial */}

      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4"> Tesimonials </h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                alt="test"
                width={80}
                height={80}
                src={UserImg}
              />
              <h2 className="text-gray-500 font-black text-[20px]">Doe</h2>
              <p>CEO @ Founder of this Website</p>
              <Image
                className="inline-block py-2"
                alt="quotes"
                width={30}
                height={30}
                src={Quotes}
              />
              <p className="max-w-[250px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                exercitationem! Commodi, nemo sed esse officia debitis eum
                harum, excepturi praesentium labore quis?
              </p>
            </div>
          </div>
          <div className="bg-red-600 bg-[url(/assets/banner-1.webp)] bg-cover-h[600px] rounded-2xl grid place-items-center">
            <div className="bg-[#fffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-black text-white p-2 rounded-md">
                25% Discount
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collections
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ 4289 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
