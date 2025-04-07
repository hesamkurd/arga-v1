import React from "react";

import Image from "next/image";
import { images } from "./mock/images";

function BestProduct() {
  return (
    <div className="w-[80%] mx-auto mt-24 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className=" h-96 flex flex-col rounded-2xl overflow-hidden shadow"
          >
            <div className="h-[60%] relative object-cover">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-2 px-4 py-2">
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BestProduct;
