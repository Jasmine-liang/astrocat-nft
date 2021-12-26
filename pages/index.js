import Navigation from "../component/Navigation";

import Partner from "../component/Partner";
import AboutUs from "../component/AboutUs";
import Timeline from "../component/Timeline";
import Team from "../component/Team";
import Faqs from "../component/Faqs";
import Footer from "../component/Footer";
import Hero from "../component/Hero";

export default function Home() {
  return (
    <div>
      <div className="relative md:h-screen ">
        <Navigation />
        <Hero />
         <div className="w-24 absolute bottom-0 left:6 md:left-60 ">
        <img src="/images/Hero - 2.png" alt="" />
      </div>
      </div>
     
      <main>
        <Partner />
        <AboutUs />
        <Timeline />
        <Team />
        <Faqs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
