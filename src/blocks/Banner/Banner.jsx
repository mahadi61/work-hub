import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Image from "next/image";
import bannerPhoto from "../../../public/banner.png";
const Banner = () => {
  return (
    <section className="bg-white min-h-screen ">
      <Container>
        <div className="flex justify-between items-center min-h-screen ">
          {/* left content */}
          <div className="flex justify-center items-center">
            <div className="">
              <h1 className="h1 uppercase text-[#14a800]">
                Hire best freelancers
              </h1>
              <h1 className="h1 uppercase text-[#14a800]">based on reviews</h1>

              <p className="p text-gray-500 mb-5">
                Explore top rated freelancer
              </p>
              <Button size="sm">Browser jobs</Button>
            </div>
          </div>
          {/* banner image */}
          <div>
            <Image src={bannerPhoto} alt="banner photo" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
