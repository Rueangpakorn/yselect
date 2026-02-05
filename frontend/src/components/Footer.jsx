import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 pt-10 bg-white dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-310 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className="dark:text-gray-400 ">
          <p>© 2026 My Website. All rights reserved.</p>
          <div className="flex justify-center sm:w-xs pt-4 gap-4">
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
            <FaTwitch />
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-bold">About Us</h6>
          <p className="dark:text-gray-400 ">
            Dive into our blog for the latest insights, trends, and stories in
            technology,Stay informed and inspired with expert perspectives and
            in-depth analyses.
          </p>
        </div>

        <div>
          <h6 className="mb-2 font-bold">Contact</h6>
          <ol className="dark:text-gray-400 ">
            <li>
              Email:john.mendell@brand.com.uk
              <a href="mailto:"></a>
            </li>
            <li>
              Phone: 066-666-6666
              <a href="tel:"></a>
            </li>
            <li>
              Address:
              <address>123 Main St, Anytown, USA</address>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
