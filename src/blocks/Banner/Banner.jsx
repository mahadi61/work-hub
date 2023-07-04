import { BsArrowRight, BsStarFill } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import bannerPhoto from "../../../public/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-2 min-h-screen bg-slate-200">
        {/* left content */}
        <div className="flex justify-center items-center">
          <div className="">
            <h1 className="text-5xl uppercase text-blue-600 font-bold">
              Hire best freelancers
            </h1>
            <h1 className="text-5xl uppercase text-blue-600 font-bold">
              based on reviews
            </h1>

            <p className="text-3xl text-gray-500 mb-5">
              Explore top rated freelancer
            </p>
            <Link
              href=""
              className="flex items-center justify-between gap-2 w-52  bg-blue-600 py-2 px-5 mt-6 text-white font-bold text-xl"
            >
              Browser jobs
              <BsArrowRight />
            </Link>
          </div>
        </div>
        {/* banner image */}
        <div>
          <Image src={bannerPhoto} alt="banner photo" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-1 py-1 px-2 bg-white w-48 absolute bottom-7 right-2/4 rounded-lg">
        {/* left image */}
        <div>
          <img
            src={"https://i.ibb.co/bXbysTM/hero.png"}
            className="w-14 "
            // width={50}
            // height={50}
            alt="banner photo"
          />
        </div>
        {/* left image */}
        <div>
          <h3 className="text-base">Devon Lie</h3>
          <p className="text-sm">Web developer</p>
          <p className="text-yellow-400 flex gap-1">
            {/* star icon */}
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
