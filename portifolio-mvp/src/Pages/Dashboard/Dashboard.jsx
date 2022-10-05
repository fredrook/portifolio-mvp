import { Container } from "./DashboardCSS";
import Header from "../../Components/Header/Header";
import SubHeaderFoto from "../../Components/SubHeaderFoto/SubHeaderFoto";
import Carousel from "../../Components/Carousel/Carousel";
import Main from "../../Components/Main/Main";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <SubHeaderFoto />
      <Main/>
      <Carousel />
    </Container>
  );
};

export default Dashboard;
