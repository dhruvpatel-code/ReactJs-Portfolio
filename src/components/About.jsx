import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a full-stack web developer with a passion for creating beautiful
          websites and applications. I'm currently working at Advanced Airfoil
          Components as a full-stack web developer. Utilizing C#, .NET Core, and
          SQL Server I'm able to create robust web applications that are
          user-friendly and easy to use. With CRUD functionality, I can create
          and update databases and create RESTful APIs.
        </p>

        <br />

        <p className="text-xl">
          I Also have a passion for learning new technologies and languages. I'm
          currently learning React and Node.js. I'm also learning Python and
          C++. I love to learn new technologies and languages and I'm always
          looking for new ways to improve my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
