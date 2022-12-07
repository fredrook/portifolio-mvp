import { Container } from "./DashboardCSS";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FrontEndPage from "../FrontEnd/FrontEndPage";
import WellCome from "../WellcomePage/WellcomePage";
import BackEndPage from "../BackEnd/BackEndPage";
import ProjectPage from "../Projects/ProjectsPage";

const Dashboard = () => {
  const Iceb: string = require("../../Assets/Icones/IceB.png");
  const Ondas: string = require("../../Assets/Icones/Ondas.png");

  return (
    <Container>
      <Header />
      <img className="ICB" src={Iceb} alt="Fundo de Movel!" />
      <img className="Ondas" src={Ondas} alt="Fundo de estatico!" />
      <WellCome />
      {/* <FrontEndPage />
      <BackEndPage />
      <ProjectPage /> */}
      <Footer />
     
    </Container>
  );
};

export default Dashboard;
