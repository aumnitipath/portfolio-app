import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white sm:h-screen pt-14"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          nobis illum mollitia doloribus alias quam aspernatur a aliquid?
          Ducimus nulla ipsa saepe dolorem modi perferendis quidem itaque
          voluptas odit voluptatibus excepturi dolor in, tenetur sequi odio. Sit
          consequuntur iure amet. Eum earum tempora quis accusamus ea itaque
          assumenda doloribus mollitia.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          nobis illum mollitia doloribus alias quam aspernatur a aliquid?
          Ducimus nulla ipsa saepe dolorem modi perferendis quidem itaque
          voluptas odit voluptatibus excepturi dolor in, tenetur sequi odio. Sit
          consequuntur iure amet. Eum earum tempora quis accusamus ea itaque
          assumenda doloribus mollitia.
        </p>
      </div>
    </div>
  );
};

export default About;
