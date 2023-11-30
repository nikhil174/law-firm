import AreaOfPractices from "./components/AreaOfPractices/AreaOfPractices.jsx";
import ClientSection from "./components/ClientSection/ClientSection.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Introduction from "./components/Introduction/Introduction.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NewsLetter from "./components/NewsLetter/NewsLetter.jsx";
import Team from "./components/Team/Team.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main style={{
        backgroundColor: '#1e1e1e',
        paddingBottom: '250px'
      }}>

        <Introduction />
        <WhyChooseUs />
        <AreaOfPractices />
        <ClientSection />
        <Team />
        <FAQ />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}

export default App;
