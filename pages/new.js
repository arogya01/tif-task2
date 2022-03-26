import About from "../containers/New/About";
import Community from "../containers/New/Community";
import HeroSection from "../containers/New/HeroSection";
import Events from "../containers/New/Events";
import AboutImg from '../public/new/about.png';
import imgSrcOne from '../public/new/1.png';
import imgSrcTwo from '../public/new/2.png';
import imgSrcThree from '../public/new/3.png';

export default function New() {
  return (
    <>
      <HeroSection
        tagLine="Generating Infinite Synergies"
        btnName="Know More"
      />
      <About
        pieceOne="India Finland Startup Hub is an exceptional collaboration between
Business Finland and Headstart Network Foundation. Started in
April 2021, it aims to connect the two startup ecosystems of India
and Finland to find the best of the consolidations associated with one another. It seeks to create a networking platform to generate an intake of information and persists on providing support & opportunities to startups in Finland and for Finnish Startups to extend into India.
"
pieceTwo="The startup ecosystem in Finland is bursting with potential. The start of IFSH automatically creates a two-way road of equal opportunities and responsibilities for both India and Finland where the Indian startups can take this chance and can bring their business abroad. The innovation funding of IFSH is available for the companies in Finland where startups can independently pitch their products."
   header="About IFSH"
   imgSrc={AboutImg}
      />
      <Community 
       header="Community"
       content="Bridging two countries has never been easier. Headstart Network Foundation has
       successfully created communities in its spectrum so that you can connect with us and
       Finland! Our community of India Finland Startup Hub is currently launched on Linkedin,       
       Facebook and Slack. We are open for all and everyone!"
       tagLine="Don’t miss the opportunity to link your startup to one of the best ecosystems in the world globally!"
       imgSrcOne={imgSrcOne}
       imgSrcTwo={imgSrcOne}
       imgSrcThree={imgSrcOne}
       btnName="Join Now"
      />
    <Events 
    header="Events"
    tagLine="India-Finland Startup Hub"
    
    />
    </>
  );
}
