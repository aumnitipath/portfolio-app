import React from "react";
import { Link } from "react-router-dom";
import installNode from "../assets/portfolio/installNode.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import tattooPost from "../assets/portfolio/tattooPost.jpg";
import tourPort from "../assets/portfolio/tourPort.jpg";
import usestate from "../assets/portfolio/usestate.jpg";
import webProject from "../assets/portfolio/webProject.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: tourPort,
      githubLink: "https://github.com/aumnitipath/react-tourist-search",
      preview: "",
    },
    {
      id: 2,
      src: webProject,
      githubLink: "https://github.com/ekkasitProject/Pet-Sitter-App",
      preview: "",
    },
    {
      id: 3,
      src: tattooPost,
      githubLink: "https://github.com/aumnitipath/my-tattoo-app",
      preview: "https://my-tattoo-mf4z2vwjk-aumzaika-gmailcom.vercel.app/",
    },
    {
      id: 4,
      src: reactParallax,
      githubLink: "https://github.com/aumnitipath",
      preview: "",
    },
    {
      id: 5,
      src: installNode,
      githubLink: "https://github.com/aumnitipath/question-blog-post",
      preview: "",
    },
    {
      id: 6,
      src: usestate,
      githubLink: "https://github.com/aumnitipath",
      preview: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black  to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="shadow-md shadow-gray-600 rounded-lg"
                >
                  <img
                    src={item.src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => {
                        window.open(item.preview, "_blank");
                      }}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Demo
                    </button>

                    <button
                      onClick={() => {
                        window.open(item.githubLink, "_blank");
                      }}
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    >
                      Code
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
