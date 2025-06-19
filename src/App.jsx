import ProfileSection from "./components/profilSection/ProfilSection";
import ProjectSection from "./components/projectSection/Projectsection";
import CompetencesSection from"./components/competencesSection/CompetencesSection";
import Navbar from "./components/navbar/Navbar";

import './App.scss'

function App() {
  return (
    <main className="main">
      {/* <Navbar /> */}
      {/* <ProfileSection /> */}
      <CompetencesSection />
      <ProjectSection />
    </main>
  );
}

export default App;
