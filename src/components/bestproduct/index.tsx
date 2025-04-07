import React from "react";

import img from "../../../public/assets/hero-image.jpg";
import img1 from "../../../public/assets/woman-hero.png";
import img2 from "../../../public/assets/one.webp";
import img3 from "../../../public/assets/two.jpg";
import img4 from "../../../public/assets/three.webp";
import img5 from "../../../public/assets/four.jpg";
import Image from "next/image";

function BestProduct() {
  return (
    <div className="w-[80%] mx-auto mt-24 grid grid-cols-1 gap-4">
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img4}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img5}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img2}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img3}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img2}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
      <div className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow">
        <div className="h-[60%] relative object-cover">
          <Image
            src={img3}
            alt="product one"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
          <h3 className="font-bold text-xl">شیرینی یزدی</h3>
          <p>
            با پخت خانگی و مواد اولیه تازه در اندازه‌های مختلف، سفارش برای
            مراسمات و فروشگاه‌ها
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestProduct;
