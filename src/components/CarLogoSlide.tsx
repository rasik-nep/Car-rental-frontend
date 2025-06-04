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
    <div className="flex items-center justify-center flex-shrink-0">
      <Image
        src={item.image}
        alt={item.name}
        width={120}
        height={120}
        priority
        className="object-contain w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px]"
      />
    </div>
  );
};

export default CarLogoSlide;
