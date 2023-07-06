import FeaturedJobs from "@/blocks/FeaturedJobs/FeaturedJobs";
import Banner from "@/blocks/Banner/Banner";
import ClientSays from "@/blocks/ClientSays/ClientSays";
import { Navbar } from "@/components/Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <FeaturedJobs />
      <ClientSays></ClientSays>
    </main>
  );
};

export default Home;
