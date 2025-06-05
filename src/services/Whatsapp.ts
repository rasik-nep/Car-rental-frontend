export const OpenWhatsappProfile = () => {
  const whatsappNumber = "+9779869292648";
  const message = "Hello, I would like to reserve a car!";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
