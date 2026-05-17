import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import BannerBgImg from "@/assets/images/bannerImg3.jpg";
import Link from "next/link";

const Banner3 = () => {
  return (
    <div className="relative">
      <div className="">
        <Image
          src={BannerBgImg}
          alt="Banner image"
          width={1500}
          height={1500}
          className="absolute w-full h-full object-bottom object-cover -z-10"
        ></Image>
      </div>

      <div className="bg-[#001931] absolute w-full h-full -z-10 opacity-80"></div>

      <div className="max-w-340 mx-auto px-3 text-center space-y-7 py-25 md:py-40 text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-11 md:leading-15 lg:leading-18">
          Explore Trending Startup Ideas and <br />
          <span className="text-[#30B868]">the Future of Innovation</span>
        </h2>
        <p className="text max-w-200 mx-auto leading-7">
          Browse exciting startup concepts, discover emerging trends, and
          connect with a community passionate about innovation, creativity, and
          building impactful solutions.
        </p>

        <div className="flex items-center justify-center">
          <Link href={"/ideas"}>
            <Button
              className={
                "rounded-md bg-[#30B868] text-white text-lg font-medium"
              }
            >
              Explore Ideas <GoArrowRight className="text-xl" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
