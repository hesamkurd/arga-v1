import Image from "next/image";
import React from "react";

import image from "../../../public/assets/woman-hero.png";
import vec1 from "../../../public/assets/Face Massage.svg";
import { Button } from "../ui";

function HeroSection() {
  return (
    <section className="px-8 md:px-8 bg-gray-100 min-h-screen w-full">
      <div className="flex flex-col md:flex md:flex-row md:gap-8 w-[80%] mx-auto mt-14 md:mt-16">
        {/* Image Section */}
        <div className="md:w-1/2  md:flex">
          <Image
            src={image}
            alt="hero image"
            className="object-cover"
            priority={true}
          />
        </div>
        {/* Left Section */}
        <div className="md:w-1/2 md:flex md:flex-col lg:gap-8 md:gap-4 lg:py-24 md:py-12 lg:px-8">
          <h1 className="lg:text-4xl md:text-xl  font-bold lg:leading-14 md:leading-7">
            مێوانی ماڵێ بۆ چێژبردن و فێر بوون، <br />
            ئەوەی پێویستە: بیسێنە، فێری بە، مێوانی بدە
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto
            consequatur magni aliquid illum, ratione consequuntur vero quos
            voluptate quasi exercitationem reprehenderit obcaecati doloribus
            necessitatibus ut nesciunt deleniti culpa. Quas!
          </p>
          <div>
            <div className="flex gap-4">
              <Button className="bg-cyan-300">دەس پێ بکە</Button>
              <Button>دەس پێ بکە</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center  md:w-3/4 xl:w-1/2 h-[200px] pt-16">
            <div className="flex flex-col gap-4 justify-between items-center">
              <Image
                src={vec1}
                className="bg-red-300 rounded-full p-1"
                alt="first"
              />
              <span>10K</span>
              <p>هاورێ</p>
            </div>
            <div className="flex flex-col justify-between gap-4 items-center">
              <Image
                src={vec1}
                className="bg-red-300 rounded-full p-1"
                alt="second"
              />
              <span>10K</span>
              <p>هاورێ</p>
            </div>
            <div className="flex flex-col justify-between gap-4 items-center">
              <Image
                src={vec1}
                className="bg-red-300 rounded-full p-1"
                alt="thtee"
              />
              <span>10K</span>
              <p>هاورێ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
