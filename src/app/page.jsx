import Banner from "@/blocks/Banner/Banner";
import Blogs from "@/blocks/Blogs/Blogs";
import ClientSays from "@/blocks/ClientSays/ClientSays";
import FeaturedJobs from "@/blocks/FeaturedJobs/FeaturedJobs";
import Footer from "@/blocks/Footer/Footer";
import PopularSeller from "@/blocks/PopularSeller/PopularSeller";
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
      <PopularSeller />
      <ClientSays></ClientSays>
      <Footer></Footer>
    </main>
  );
};

export default Home;
