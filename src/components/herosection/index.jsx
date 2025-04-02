import Image from "next/image";
import React from "react";

import image from "../../../public/assets/woman-hero.png";
import { Button } from "../ui";

function HeroSection() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex md:flex-row ">
        <div className="md:w-1/2">
          <Image src={image} alt="hero image" priority={true} />
        </div>
        <div className="md:w-1/2 md:flex md:flex-col gap-8 py-24 px-8">
          <h1 className="text-4xl font-bold">
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
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
