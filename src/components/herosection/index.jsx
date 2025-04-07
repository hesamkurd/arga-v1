import Image from "next/image";
import React from "react";

import image from "../../../public/assets/woman-hero.png";
import vec1 from "../../../public/assets/Face Massage.svg";
import vec2 from "../../../public/assets/Lotus.svg";
import vec3 from "../../../public/assets/Mortar.svg";
import { Button } from "../ui";

function HeroSection() {
  return (
    <section className=" bg-gray-100 md:min-h-screen w-full">
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
            طعم‌هایی که قلب را گرم می‌کنند ...
            <br />
            ئارگا: مکانی برای یادگرفتن آشپزی همراه با سرگرمی
          </h1>
          <p className="my-8">
            در ئارگا سعی شده با ساده‌ترین روش هنر آشپزی رو یادتون بدیم و خودتون
            هم هنر آشپزی‌تون رو با دوستان‌تون به اشتراک بذارید. در ضمن در ئارگا
            میتونید مواد اولیه و وسایل آشپزی رو به راحتی سفارش بدید
          </p>
          <div>
            <div className="flex gap-4">
              <Button className="bg-cyan-300">غذای امروز</Button>
              <Button>برو به فروشگاه</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pb-8 px-12  md:w-3/4 xl:w-1/2 h-[200px] pt-16">
            <div className="flex flex-col gap-4 justify-between items-center">
              <Image
                src={vec1}
                className="bg-red-300 rounded-full p-1"
                alt="first"
              />
              <span>10K</span>
              <p>سرآشپز</p>
            </div>
            <div className="flex flex-col justify-between gap-4 items-center">
              <Image
                src={vec2}
                className="bg-red-300 rounded-full p-1"
                alt="second"
              />
              <span>10K</span>
              <p>هنرجو</p>
            </div>
            <div className="flex flex-col justify-between gap-4 items-center">
              <Image
                src={vec3}
                className="bg-red-300 rounded-full p-1"
                alt="thtee"
              />
              <span>10K</span>
              <p>محصول</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
