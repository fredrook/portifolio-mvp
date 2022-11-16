import { Container } from "./DashboardCSS";
import Carousel from "../../Components/Carousel/Carousel";
import Main from "../../Components/Text Apresentation/TextApresentation";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Carousel />
      <Footer />
    </Container>
  );
};

export default Dashboard;
