import FeaturedJobs from "@/blocks/FeaturedJobs/FeaturedJobs";
import Banner from "@/blocks/Banner/Banner";
import ClientSays from "@/blocks/ClientSays/ClientSays";

const Home = () => {
  return (
    <main>
      <Banner/>
      <FeaturedJobs/>
      <ClientSays></ClientSays>
    </main>
  );
};

export default Home;
