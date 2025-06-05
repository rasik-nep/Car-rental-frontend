import Image from "next/image";
import React from "react";

interface CarLogoSlideProps {
  item: {
    id: number;
    name: string;
    image: string;
  };
}

const CarLogoSlide = ({ item }: CarLogoSlideProps) => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 w-[120px] h-[70px] sm:w-[150px] sm:h-[90px] md:w-[180px] md:h-[110px] lg:w-[180px] lg:h-[100px]">
      <Image
        src={item.image}
        alt={item.name}
        width={200}
        height={120}
        priority
        className="object-contain w-full h-full"
        placeholder="blur"
      />
    </div>
  );
};

export default CarLogoSlide;
