const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full mx-auto text-center py-2 text-gray-500 fixed bottom-0">
      © Sonu | Sparsh {year} - All rights reserved
    </div>
  );
};

export default Footer;
