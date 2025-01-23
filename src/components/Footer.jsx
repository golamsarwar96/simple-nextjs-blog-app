import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 pt-3 pb-5 bg-gray-200">
        <p className="text-3xl font-bold">Blog</p>
        <div className="flex text-center flex-col md:flex-row justify-center items-center gap-3 md:text-3xl text-sm md:mt-0 mt-4">
          <p className="text-lg">Copyright 2025, All Rights Reserved.</p>
          <div className="flex gap-3 items-center justify-center text-2xl md:mt-0 mt-3">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
