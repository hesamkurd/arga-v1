import Image from "next/image";
import React from "react";

import serv1 from "../../../public/assets/serv-one.svg";
import serv2 from "../../../public/assets/serv-two.svg";
import serv3 from "../../../public/assets/serv-three.svg";

function ServiceSection() {
  return (
    <div className="w-[80%] mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-8">
        <div className="md:w-2/4">
          <h2 className="text-3xl font-bold">متنوع‌ترین دستورهای پخت</h2>
          <p className="mt-4 text-xl">
            دسترسی به هزاران دستور غذا و شیرینی با بروزترین آموزش‌ها، بهترین
            رسپی‌های ایران و جهان با ساده‌ترین روش آموزش دسترسی به هزاران دستور
            غذا و شیرینی با بروزترین آموزش‌ها، بهترین رسپی‌های ایران و جهان با
            ساده‌ترین روش آموزش
          </p>
        </div>
        <Image
          className="md:w-1/4"
          src={serv2}
          width={400}
          height={400}
          alt="service image one"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:gap-8">
        <div className="md:w-2/4">
          <h2 className="text-3xl font-bold">متنوع‌ترین دستورهای پخت</h2>
          <p className="mt-4 text-xl">
            دسترسی به هزاران دستور غذا و شیرینی با بروزترین آموزش‌ها، بهترین
            رسپی‌های ایران و جهان با ساده‌ترین روش آموزش دسترسی به هزاران دستور
            غذا و شیرینی با بروزترین آموزش‌ها، بهترین رسپی‌های ایران و جهان با
            ساده‌ترین روش آموزش
          </p>
        </div>
        <Image
          className="md:w-1/4"
          src={serv1}
          width={400}
          height={400}
          alt="service image one"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-8">
        <div className="md:w-2/4">
          <h2 className="text-3xl font-bold">متنوع‌ترین دستورهای پخت</h2>
          <p className="mt-4 text-xl">
            دسترسی به هزاران دستور غذا و شیرینی با بروزترین آموزش‌ها، بهترین
            رسپی‌های ایران و جهان با ساده‌ترین روش آموزش دسترسی به هزاران دستور
            غذا و شیرینی با بروزترین آموزش‌ها، بهترین رسپی‌های ایران و جهان با
            ساده‌ترین روش آموزش
          </p>
        </div>
        <Image
          className="md:w-1/4"
          src={serv3}
          width={400}
          height={400}
          alt="service image one"
        />
      </div>
    </div>
  );
}

export default ServiceSection;
