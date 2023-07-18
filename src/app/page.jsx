import Banner from "@/blocks/Banner/Banner";
import ClientSays from "@/blocks/ClientSays/ClientSays";
import FeaturedJobs from "@/blocks/FeaturedJobs/FeaturedJobs";
import Footer from "@/blocks/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Banner />
      <FeaturedJobs />
      <ClientSays />
      <Footer />
    </main>
  );
};

export default Home;
