import { Container } from "./DashboardCSS";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FrontEndPage from "../FrontEnd/FrontEndPage";
import WellCome from "../WellcomePage/WellcomePage";

const Dashboard = () => {
  const Iceberg: string = require("../../Assets/Icones/ICE BERG IMG.png");

  return (
    <Container>
      <Header />
      <img className="ICB" src={Iceberg} alt="Fundo de tela!" />
      <WellCome/>
      <FrontEndPage/>
      <Footer />
    </Container>
  );
};

export default Dashboard;
