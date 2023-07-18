import FeaturedJobs from "@/blocks/FeaturedJobs/FeaturedJobs";
import Banner from "@/blocks/Banner/Banner";
import ClientSays from "@/blocks/ClientSays/ClientSays";
import { Navbar } from "@/components/Navbar/Navbar";
import TrustedBy from "@/blocks/TrustedBy/TrustedBy";
import Blogs from "@/blocks/Blogs/Blogs";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <FeaturedJobs />
      <Blogs/>
      <TrustedBy/>
      <ClientSays/>
    </main>
  );
};

export default Home;
