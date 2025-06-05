"use client";

import { VEHICLE_FLEET_DATA } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VehicleFleet() {
  const [activeCategory, setActiveCategory] = useState<string>(
    Object.keys(VEHICLE_FLEET_DATA)[0]
  );

  return (
    <section className="min-h-screen md:min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center py-6 md:py-10">
        <h3 className="text-xl md:text-2xl font-light text-text-300 py-2 md:py-3">
          ONLY THE BEST CARS
        </h3>
        <h1 className="text-4xl md:text-7xl font-bold text-text-500 py-2 md:py-3">
          Our Vehicle Fleet
        </h1>
        <p className="text-base md:text-lg text-text-500 py-2 md:py-3 text-center">
          We have the best cars available <br className="hidden md:block" /> in
          Nepal and we provide the best cars and{" "}
          <br className="hidden md:block" />
          services to you.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 w-full max-w-7xl px-4 mx-auto flex-grow">
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {Object.keys(VEHICLE_FLEET_DATA).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 md:px-7 py-1 rounded-4xl text-base md:text-xl transition-colors cursor-pointer ${
                activeCategory === key
                  ? "bg-text-700 text-white hover:bg-text-700/90"
                  : "bg-[#E0E0E0] hover:bg-gray-300 text-text-700"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Show only 3 images on mobile, all on desktop */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            {VEHICLE_FLEET_DATA[
              activeCategory as keyof typeof VEHICLE_FLEET_DATA
            ]
              .slice(0, 3)
              .map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <Image
                    src={item.image || ""}
                    alt={item.name || "Vehicle image"}
                    width={700}
                    height={200}
                    className="rounded-lg w-full h-[180px] md:h-[230px] object-cover"
                  />
                  <h3 className="mt-2 text-base md:text-lg font-medium">
                    {item.name}
                  </h3>
                </div>
              ))}
          </div>

          {/* Hide on mobile, show on desktop */}
          <div className="hidden md:flex flex-row gap-4 items-center justify-center">
            {VEHICLE_FLEET_DATA[
              activeCategory as keyof typeof VEHICLE_FLEET_DATA
            ]
              .slice(3, 7)
              .map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <Image
                    src={item.image || ""}
                    alt={item.name || "Vehicle image"}
                    width={150}
                    height={100}
                    className="rounded-lg w-full h-[150px] object-cover"
                  />
                  <h3 className="mt-2 text-sm font-medium">{item.name}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-6 md:py-8 mt-auto">
        <Link href="/cars">
          <button className="text-text-700 px-6 md:px-10 py-2 text-lg md:text-xl text-center font-bold cursor-pointer">
            Show all
          </button>
        </Link>
      </div>
    </section>
  );
}
