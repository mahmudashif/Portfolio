import React from "react";
import { FiDownload } from "react-icons/fi";
import myImg from "../src/assets/myImg.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto pt-[150px] pb-[76px] flex justify-around">
        <div>
          <img src={myImg} className="h-[636px] w-[464px] rounded-3xl" alt="" />
        </div>
        <div>
          <p className="text-[20px] font-semibold uppercase pb-[27px] text-center">
            Let To Know Me
          </p>
          <h1 className="text-[100px]">Ashif Mahmud</h1>
          <div className="flex justify-center gap-10  pt-[30px] pb-[30px]">
            <div className="h-1 w-[100px] bg-white"></div>
            <div className="h-1 w-[5px] rounded-[50%] bg-[#FFA500]"></div>
            <div className="h-1 w-[100px] bg-white"></div>
          </div>
          <h3 className="text-[50px] text-center">MERN Stack Developer</h3>
          <div className="flex justify-between pt-[58px] text-[50px]">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaGithub />
            <FaTwitterSquare />
            <FaLinkedin />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div className="container  mx-auto mt-[200px] h-[300px]">
  <h1 className="text-[48px] text-center font-bold text-red-300">
    Hello, I'm Ashif Mahmud!
  </h1>
  <p className="pt-[20px] text-[20px] text-center m-auto">
    I'm a web developer passionate about crafting beautiful, functional
    websites. With a background in web development, I specialize in
    creating user-friendly experiences using HTML, CSS, and JavaScript. My
    goal is to build websites that not only look great but also perform
    seamlessly across devices. I love solving problems and am always eager
    to learn new technologies to stay ahead in this dynamic field. Whether
    it's creating sleek designs or optimizing performance, I approach each
    project with creativity and dedication. Let's work together to bring
    your ideas to life on the web! This version is simplified and concise,
    keeping it within 100 words. Feel free to adjust as needed!
  </p>
  <button className="uppercase text-center flex bg-teal-200 p-[20px] rounded font-bold mt-[150px] m-auto">
    download cv
    <FiDownload className="m-auto ml-[10px] text-[20px]" />
  </button>
</div> */
}
