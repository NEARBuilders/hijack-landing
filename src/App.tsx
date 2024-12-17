/* eslint-disable no-unused-vars */
import MatrixLoader from "./components/MatrixLoader";
import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import MascotHero from "./components/MascotHero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-matrix-primary">
      <MatrixLoader />
      <MatrixRain />
      <Navbar />
      <MascotHero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
