import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px]">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
