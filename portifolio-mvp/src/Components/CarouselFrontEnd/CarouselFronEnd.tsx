import { CarouselStyled } from "./CarouselFrontEndCSS";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const CarouselFronEnd = () => {
  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const carouselPictures: string[] = [
    "https://i.imgur.com/0KPsDum.png",
    "https://i.imgur.com/RXNqAGv.png",
    "https://i.imgur.com/Ustuoa5.png",
    "https://i.imgur.com/DaRmztf.png",
    "https://i.imgur.com/ffqI5nJ.jpg",
  ];

  return (
    <CarouselStyled id="app__carousel">
      <Slide
        responsive={responsiveSettings}
        cssClass="app__carousel--wrapper"
        indicators={true}
      >
        <div className="app__carousel--img-box" key="img_1">
          <div key="Imagem_Carousel_1" style={{ backgroundImage: `url(${carouselPictures[0]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_2">
          <div key="Imagem_Carousel_2" style={{ backgroundImage: `url(${carouselPictures[1]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_3">
          <div key="Imagem_Carousel_3" style={{ backgroundImage: `url(${carouselPictures[2]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_4">
          <div key="Imagem_Carousel_4" style={{ backgroundImage: `url(${carouselPictures[3]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_5">
          <div  key="Imagem_Carousel_5" style={{ backgroundImage: `url(${carouselPictures[4]})` }}></div>
        </div>
      </Slide>
    </CarouselStyled>
  );
};

export default CarouselFronEnd;