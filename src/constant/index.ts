// Import images
// cars
import VolkswagenPolo from "../../public/volkswagen-polo.png";
import NetaV from "../../public/netaV.png";
import BYDAtto3 from "../../public/BYD_Atto_3.png";
import NexonPrime from "../../public/nexon-ev.png";
import NexonMax from "../../public/nexonmax.png";
// vintage
import Mercedes from "../../public/mercedes-vintage.png";
import Audi from "../../public/audi-vintage.png";
import Beetle from "../../public/beetle-vintage.png";
// SUV
import DatsunGoPlus from "../../public/datsun-go-plus.png";
import Scorpio from "../../public/Scorpio.png";
// Bus
import Bus from "../../public/bus.png";
// Van
import FotonElectricVan from "../../public/Foton-Electric.png";
import ToyotaHiace from "../../public/toyota-hiace.png";

export const CAR_LOGO_SLIDE_DATA = [
  {
    id: 1,
    name: "audi",
    image: "/audi.png",
  },
  {
    id: 2,
    name: "byd",
    image: "/byd.png",
  },
  {
    id: 3,
    name: "hyundai",
    image: "/hyundai.png",
  },
  {
    id: 4,
    name: "mahindra",
    image: "/mahindra.png",
  },
  {
    id: 5,
    name: "mercedes",
    image: "/mercedes.png",
  },
  {
    id: 6,
    name: "neta",
    image: "/neta.png",
  },
  {
    id: 7,
    name: "skoda",
    image: "/skoda.png",
  },
  {
    id: 8,
    name: "tata",
    image: "/tata.png",
  },
  {
    id: 9,
    name: "toyota",
    image: "/toyota.png",
  },
];

export const VEHICLE_FLEET_DATA = {
  Car: [
    {
      id: 1,
      name: "Volkswagen Polo",
      image: VolkswagenPolo,
      price: "Rs. 4,999/day",
    },
    {
      id: 2,
      name: "Neta V",
      image: NetaV,
      price: "Rs. 4,999/day",
    },
    {
      id: 3,
      name: "BYD Atto 3",
      image: BYDAtto3,
      price: "Rs. 4,999/day",
    },
    {
      id: 4,
      name: "Nexon Prime",
      image: NexonPrime,
      price: "Rs. 4,999/day",
    },
    {
      id: 5,
      name: "Nexon Max",
      image: NexonMax,
      price: "Rs. 4,999/day",
    },
  ],
  // Luxury: [
  //   {
  //     id: 1,
  //     name: "audi",
  //     image: "/CarImage.jpg",
  //     price: "Rs. 25,000/day",
  //   },
  //   {
  //     id: 2,
  //     name: "byd",
  //     image: "/CarImage.jpg",
  //     price: "Rs. 22,000/day",
  //   },
  //   {
  //     id: 3,
  //     name: "hyundai",
  //     image: "/CarImage.jpg",
  //     price: "Rs. 20,000/day",
  //   },
  // ],
  Vintage: [
    {
      id: 1,
      name: "Mercedes",
      image: Mercedes,
      price: "Please contact us",
    },
    {
      id: 2,
      name: "Audi",
      image: Audi,
      price: "Please contact us",
    },
    {
      id: 3,
      name: "Beetle",
      image: Beetle,
      price: "Please contact us",
    },
  ],
  SUV: [
    {
      id: 1,
      name: "Datsun Go Plus 7 seater",
      image: DatsunGoPlus,
      price: "Rs. 5,999/day",
    },
    {
      id: 2,
      name: "Scorpio",
      image: Scorpio,
      price: "Rs. 5,999/day",
    },
  ],
  Bus: [
    {
      id: 1,
      name: "Bus",
      image: Bus,
      price: "Rs. 12,999/day",
    },
  ],
  Van: [
    {
      id: 1,
      name: "Foton Electric Van",
      image: FotonElectricVan,
      price: "Rs. 4,999/day",
    },
    {
      id: 2,
      name: "Toyota Hiace",
      image: ToyotaHiace,
      price: "Rs. 4,999/day",
    },
  ],
};

export const FEATURES_DATA = [
  {
    id: 1,
    title: "24-hour car delivery",
  },
  {
    id: 2,
    title: "Marriage Car",
  },
  {
    id: 3,
    title: "Cheapest price in country",
  },
  {
    id: 4,
    title: "Self drive",
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Sujan Rana",
    role: "Business Traveler",
    rating: 5,
    text: "We rented a self-driving SUV for our Pokhara trip, and it was one of the best decisions we made. The car was clean, well-maintained, and perfect for the winding highways. No hassle, just freedom on the road!",
  },
  {
    id: 2,
    name: "Apsara & Binod",
    role: "Tourist",
    rating: 5,
    text: "We hired their luxury car for our wedding, and it added a special touch to the big day. The car was beautifully decorated, arrived on time, and the chauffeur was extremely professional. Highly recommended for any special event!",
  },
  {
    id: 3,
    name: "Ramesh Khatri",
    role: "Local Customer",
    rating: 5,
    text: "I frequently travel for work, and their self-drive cars have been a game-changer. Booking is quick, pricing is fair, and the support team is always responsive. It's like having your own car without the ownership headache.",
  },
  {
    id: 4,
    name: "Meena Dangol",
    role: "Family Traveler",
    rating: 5,
    text: "Our family of six rented a van for a week-long tour around eastern Nepal. The rental process was smooth, and the vehicle was perfect for a long trip—comfortable, spacious, and reliable. We'll definitely book again..",
  },
];

export const CONTACT_DATA = {
  Phone: "+9779869292648",
  Email: "shanvehiclerental@gmail.com",
  Address: "Kathmandu, Nepal",
};
