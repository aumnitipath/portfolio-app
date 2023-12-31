import React from "react";
import { BsFillPersonLinesFill, BsPersonDown } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nitipath-chuejuntuk-93635326b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/aumnitipath",
    },
    {
      id: 3,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:aumnitipath@outlook.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsPersonDown size={30} />
        </>
      ),
      //TODO ลองเปลี่ยนเป็น download และ deploy ด้วย
      // href: "/Resume-Nitipath Chuejuntuk.pdf",
      href: "https://drive.google.com/file/d/1Vm5C24bQey6PzJb8WHXammJRcFWduir0/view?usp=sharing",
      style: "rounded-br-md",
      // download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((item) => {
          // หรือจะ desturc ก็ได้ {links.map(({id,child}))} และเอา id or child ไปใช้ได้เลย
          return (
            <>
              <li
                key={item.id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gray-500" +
                  " " +
                  item.style
                }
              >
                <a
                  href={item.href}
                  className="flex justify-between items-center w-full text-white"
                  // download={item.download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.child}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
