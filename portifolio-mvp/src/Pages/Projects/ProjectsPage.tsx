import CarouselBackEnd from "../../Components/CarouselBackEnd/CarouselBackEnd";
import CarouselFronEnd from "../../Components/CarouselFrontEnd/CarouselFronEnd";
import { TagContainer } from "./ProjectsPageCSS";

const ProjectPage = () => {
  return (
    <TagContainer id="IDPROJ">
      <h2>Projetcs</h2>
      <CarouselFronEnd />
      <CarouselBackEnd />
    </TagContainer>
  );
};

export default ProjectPage;
