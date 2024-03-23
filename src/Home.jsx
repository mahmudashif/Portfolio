import React from "react";
import aboutPic from "../src/assets/about.png";

const Home = () => {
  return (
    <div className="bg-primary">
      <div className="font-imbue text-center pt-[77px] container mx-auto">
        <p className="text-[20px] text-white pb-6">My Intro</p>
        <h3 className="text-white text-[45px] uppercase font-bold">
          Self Portrait
        </h3>
      </div>
      <div className="container mx-auto pt-[100px] flex justify-center">
        <div>
          <img className="h-[546px] w-[546px]" src={aboutPic} alt="" />
        </div>
        <div className="font-imbue text-white pl-6">
          <p className="text-[25px] pb-6">Who Am I?</p>
          <h3 className="text-[35px] w-[586px]">
            Hello! I’m Ashif Mahmud, a complete{" "}
            <span className="text-[#FFA500] font-bold">MERN</span> stack and{" "}
            <span className="text-[#FFA500] font-bold">App</span> developer
            Also...
          </h3>
          <h2 className="w-[586px] text-[18px] pt-6">
            "Passionate MERN stack app developer with a knack for turning ideas
            into seamless digital experiences. My journey into the world of
            coding began with a love for problem-solving and a curiosity for
            crafting user-centric applications. With a strong foundation in
            MongoDB, Express.js, React, and Node.js, I thrive on building robust
            and dynamic web applications that deliver both functionality and
            aesthetics. By combining my technical prowess with a keen eye for
            design, I aim to create user interfaces that engage and delight.
            Constantly driven by learning, I embrace challenges that push my
            boundaries, making innovation and growth my constant companions."
          </h2>
          <div className="pt-10">
                <h3 className="text-[25px] text-center">Personal Information...</h3>
            <div className=" flex items-center">
              <div>
                <div className="text-[20px]">
                  <p className="mt-4">Name : Ashif Mahmud</p>
                  <p className="mt-4">Present Address : Dhaka, Bangladesh</p>
                  <p className="mt-4">
                    Permanent Address : Chattagram, Bangladesh
                  </p>
                  <p className="mt-4">D.O.B : 16-10-2001</p>
                </div>
              </div>
              <div className="text-[20px] pl-[50px]">
                <p className="mt-4">E-Mail : asifmahmud2000@gmail.com</p>
                <p className="mt-4">Phone : 01867299071</p>
                <p className="mt-4">Language : Bangla, English</p>
                <p className="mt-4">Work : Inactive</p>
                <p className="mt-4">Profession : Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
