import Container from "@/components/Container/Container";
import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import imag1 from "../../../public/carousel/Ornament 80.png";
import imag2 from "../../../public/carousel/Ornament 81.png";

function ClientSays() {
  return (
    <section className="py-12">
      <Container>
        <div className="bg-green-400 rounded-lg relative">
          <h3 className="h3 text-green-900 pt-14 pl-5 lg:pl-10 pb-20">
            What Our Clients Say About Us
          </h3>
          <Image
            className="absolute right-[10%] top-[12%] pb-5"
            src={imag2}
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <div className=" pb-16">
            <Carousel></Carousel>
          </div>
          <Image
            className="absolute bottom-0 pb-5"
            src={imag1}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </Container>
    </section>
  );
}

export default ClientSays;
