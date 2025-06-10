import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className=" text-[#FEFAE0] p-4 m-[1rem]  text-center flex justify-around gap-6
      items-center flex-col  md:flex-row "
    >
      <p>Play. Compete. Win.</p>
      <p>&copy; 2025 Lucky Pockets. All rights reserved.</p>
      <Link to="/terms">terms of service | privacy policy</Link>
    </div>
  );
};
