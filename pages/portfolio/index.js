import BlockOne from "../../containers/Portfolio/BlockOne";
import Footer from "../../containers/Portfolio/Footer";
import Port_Navbar from "../../containers/Portfolio/Port_Navbar";
import Profile from "../../containers/Portfolio/Profile";
import Recent from "../../containers/Portfolio/Recent";
import Tab from "../../containers/Portfolio/Tab";
import Layout from "../../components/Layout";

export default function Portfolio() {
  return (

    <Layout>
      <Port_Navbar />
      <Profile content="Over the years, I have the honour to collaborate with clients range from startups to SME, some of them has grown successfully or being acquired. Below are some of the works I've involved with." />
      <BlockOne />
      <Recent />
      <Tab />
      <Footer
        content="I am taking new projects now. <br/>
If you happen to have one, please get in touch."
      />
      </Layout>
  );
}
