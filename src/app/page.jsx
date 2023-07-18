import Banner from "@/blocks/Banner/Banner";
import Blogs from "@/blocks/Blogs/Blogs";
import ClientSays from "@/blocks/ClientSays/ClientSays";
import FeaturedJobs from "@/blocks/FeaturedJobs/FeaturedJobs";
import TrustedBy from "@/blocks/TrustedBy/TrustedBy";
import { Navbar } from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <FeaturedJobs />
      <TrustedBy />
      <Blogs />
      <ClientSays></ClientSays>
    </main>
  );
};

export default Home;
