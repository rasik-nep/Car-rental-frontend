import { CONTACT_DATA } from "@/constant";

export const OpenWhatsappProfile = () => {
  const whatsappNumber = CONTACT_DATA.Phone;
  const message = "Hello, I would like to reserve a car!";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
