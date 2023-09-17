import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";








const Footer = () => {
  return (
    <div className="bg-[#101827] w-full mx-auto py-10 px-4 lg:px-8 xl:px-16 2xl:px-20 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-[#4f9ee3]">REACT</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h6 className="font-medium text-gray-400 flex flex-col items-center">Solutions</h6>
            <div className="flex flex-col items-center">
              <p className="py-2 text-sm">Analytics</p>
              <p className="py-2 text-sm">Marketing</p>
              <p className="py-2 text-sm">Commerce</p>
              <p className="py-2 text-sm">Insights</p>
            </div>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 flex flex-col items-center">Support</h6>
            <div className=" flex flex-col items-center">
              <p className="py-2 text-sm">Pricing</p>
              <p className="py-2 text-sm">Documentation</p>
              <p className="py-2 text-sm">Guides</p>
              <p className="py-2 text-sm">API Status</p>
            </div>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 flex flex-col items-center">Company</h6>
            <div className="flex flex-col items-center">
              <p className="py-2 text-sm">About</p>
              <p className="py-2 text-sm">Blog</p>
              <p className="py-2 text-sm">Jobs</p>
              <p className="py-2 text-sm">Press</p>
              <p className="py-2 text-sm">Careers</p>
            </div>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 flex flex-col items-center">Legal</h6>
            <div className=" flex flex-col items-center">
              <p className="py-2 text-sm">Claim</p>
              <p className="py-2 text-sm">Policy</p>
              <p className="py-2 text-sm">Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
