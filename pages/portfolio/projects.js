import { ScaleFade, keyframes, Box } from "@chakra-ui/react";
import BlockOne from "../../containers/Portfolio/BlockOne";
import Footer from "../../containers/Portfolio/Footer";
import Port_Navbar from "../../containers/Portfolio/Port_Navbar";
import Profile from "../../containers/Portfolio/Profile";
import Recent from "../../containers/Portfolio/Recent";
import Tab from "../../containers/Portfolio/Tab";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../../components/Layout";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const fadeIn = keyframes`
from {opacity : 0;}
to {opacity: 1;}
`;

export default function Projects() {
  // const fadeInAnimation = `${fadeIn} 2s linear`

  return (
    <>
      
        <Layout>
          <Port_Navbar />
          <Profile content="Over the years, I have the honour to collaborate with clients range from startups to SME, some of them has grown successfully or being acquired. Below are some of the works I've involved with." />
          <Recent />
          </Layout>
    </>
  );
}
