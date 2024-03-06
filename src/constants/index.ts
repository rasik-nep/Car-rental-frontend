// socials.js
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// text
export const PAGE_TEXT ={
  hero_title_text:"Explore with Ease",
  hero_subtitle_text:"Affordable, reliable vehicle rentals at your service.",
  about_title:"About Us",
  about_text:"Welcome to Shan Vehicle Rental, your trusted partner for seamless journeys in Kathmandu and beyond. With a commitment to reliability and comfort, we offer a diverse fleet of well-maintained vehicles to explore Nepal's breathtaking landscapes. From bustling city streets to serene mountain retreats, Shan Vehicle Rental is your key to hassle-free travel. Discover the freedom of the open road with us, where every trip is a memorable adventure. Your journey begins here, with Shan Vehicle Rental—your premier choice for car rentals in Kathmandu and across the beautiful landscapes of Nepal.",
  service_title:"Our Services",
  services_text:"Your go-to destination for reliable and convenient car rental services. Our commitment is to provide you with seamless experiences and quality vehicles for all your travel needs.",
  price_title:"Our Prices",
  price_text:"Explore our diverse range of vehicles and flexible rental options to find the perfect match for your travel plans. Our transparent pricing ensures that you have full visibility into the costs associated with your rental, with no hidden fees. At Shan Vehicle Rental, we are dedicated to providing you with a seamless and personalized experience, from the moment you book your vehicle to the end of your journey. Discover the freedom to explore with ease, comfort, and confidence, only with Shan Vehicle Rental.",
  testimonials_title:"Don't take our words for it",
}

// testimonials
export const TESTIMONIALS = [
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
    name: "John Smith",
    job: "Marketing Specialist",
    review_desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    review_star: 2
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    name: "Maria Smantha",
    job: "Web Developer",
    review_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic.",
    review_star: 5
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    name: "Lisa Cudrow",
    job: "Graphic Designer",
    review_desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
    review_star: 3
  }
]

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/contact_us', key: 'contact_us', label: 'Contact Us' },
];

export const FOOTER_CONTACTS={
  title: 'Contact',
  content:[
    {title:  "Location", label: "New Baneshwor, Kathmandu" },
    { title:  "Phone", label: "+977-9851164345" },
    { title:  "Email", label: "shanvehiclerental@gmail.com" },
  ]
}

export const SOCIALS = {
    title: 'Social',
    links: [
        { label: 'Facebook', href: 'https://www.facebook.com', logo: FaFacebook },
        { label: 'Instagram', href: 'https://www.instagram.com', logo: FaInstagram },
        { label: 'WhatsApp', href: 'https://www.twitter.com', logo: FaWhatsapp },
    ],
};

export const SERVICES_DISPLAY_SECTION=[
  {
    index:"01",
    firstSpan:"Personalized",
    secondSpan:"Experiences",
    descriptionShort:"By recognizing the needs of our visitors, Shan Vehicle Rental ensures a personalized experience that leaves a lasting impression. Our commitment to a seamless and unique process keeps our customers returning for more",
    descriptionLong:"Discover a world of tailored journeys with Shan Vehicle Rental's Personalized Experiences. Our commitment goes beyond providing vehicles; it extends to creating unique and memorable adventures for each customer. From customized vehicle selections to personalized travel recommendations, we ensure that every aspect of your rental experience reflects your individual preferences and needs. At Shan Vehicle Rental, your journey is not just a rental; it's a personalized exploration crafted just for you.",
  },
  {
    index:"02",
    firstSpan:"Flexible",
    secondSpan:"Rental",
    descriptionShort:"Offer flexibility in rental durations, whether it's hourly, daily, weekly, or monthly, to accommodate different travel plans",
    descriptionLong:"At Shan Vehicle Rental, we understand that every journey is unique, and our flexible rental options are tailored to accommodate your specific needs. Whether you're planning a quick day trip, an extended weekend getaway, or a month-long adventure, we offer versatile rental durations to suit your schedule. Our commitment to flexibility ensures that you have the freedom to choose the rental period that aligns seamlessly with your travel plans.\n\nWhether it's an hourly rental for a short errand, a daily rental for a weekend escape, a weekly rental for an extended vacation, or a monthly rental for a more extended stay, Shan Vehicle Rental provides hassle-free options. This flexibility extends to adapting your rental duration on the go, giving you the control to adjust your plans as needed. With Shan Vehicle Rental, your journey is as dynamic as your schedule.",
  },
  {
    index:"03",
    firstSpan:"Transparent",
    secondSpan:"Pricing",
    descriptionShort:"Emphasize transparent pricing with no hidden fees. Provide details about what's included in the rental cost.",
    descriptionLong:"At Shan Vehicle Rental, transparency is the cornerstone of our commitment to customer satisfaction. Our pricing model is straightforward and devoid of any hidden fees, ensuring that you have a clear understanding of the costs associated with your rental. We believe in providing you with a comprehensive breakdown of charges, so you know exactly what you're paying for.\n\nOur transparent pricing includes all the essentials, from the base rental fee to taxes and any applicable surcharges. We take pride in being upfront about our pricing structure, eliminating surprises when it comes time to settle your bill. Additionally, we offer detailed information on what is covered within the rental cost, ensuring that you have full visibility into the value you receive.\n\nFor added convenience, our website features a user-friendly interface where you can easily view and compare prices, explore available discounts, and customize your rental package based on your preferences. Shan Vehicle Rental is dedicated to delivering a pricing experience that is as reliable and transparent as our fleet of vehicles.",
  }
]

export const PRICE_LIST=[
  {
    id: 0,
    name: 'Datsun Go',
    price: 'Rs. 5000'
  },
  {
    id: 1,
    name: 'Celerio',
    price: 'Rs. 5500'
  },
  {
    id: 2,
    name: 'i20 Active',
    price: 'Rs. 7000'
  },
  {
    id: 3,
    name: 'Magnite',
    price: 'Rs. 7500'
  },
  {
    id: 4,
    name: 'EcoSport',
    price: 'Rs. 7500'
  },
  {
    id: 5,
    name: 'Venue',
    price: 'Rs. 7500'
  },
  {
    id: 6,
    name: 'Brezza',
    price: 'Rs. 8000'
  },
  {
    id: 7,
    name: 'Nexon',
    price: 'Rs. 8500'
  },
  {
    id: 8,
    name: 'Kicks',
    price: 'Rs. 9000'
  },
  {
    id: 9,
    name: 'Terrano',
    price: 'Rs. 10000'
  },
  {
    id: 10,
    name: 'Fiat Punto',
    price: 'Rs. 5500'
  },
  {
    id: 11,
    name: 'Swift',
    price: 'Rs. 6500'
  },
  {
    id: 12,
    name: 'Hyundai Creta',
    price: 'Rs. 7500'
  },
  {
    id: 13,
    name: 'Creta (2022)',
    price: 'Rs. 9000'
  },
  {
    id: 14,
    name: 'Mahindra XUV 500',
    price: 'Rs. 9500'
  },
  {
    id: 15,
    name: 'Kia Seltos',
    price: 'Rs. 9500'
  },
  {
    id: 16,
    name: 'Scorpio',
    price: 'Rs. 9500'
  },
];
