import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  aspect-ratio: auto 1 / 1;
`;

export const TextApresentationDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 700px;
  height: 350px;

  position: absolute;
  top: 11%;
  left: 4%;

  @media screen and (min-width: 2560px) {
    top: 10%;
    left: 4.5%;
    width: 980px;
    height: 350px;
  }

  @media screen and (max-width: 1920px) {
    top: 11%;
    left: 4%;
    width: 700px;
    height: 350px;
  } 

  @media screen and (max-width: 1880px) {
    top: 11%;
    left: 4%;
    width: 700px;
    height: 350px;
  }

  @media screen and (max-width: 1680px) {
    top: 10%;
    left: 4%;
  }

  @media screen and (max-width: 1600px) {
    top: 10%;
    left: 4%;
  }

  @media screen and (max-width: 1440px) {
    top: 9%;
    left: 4%;
    width: 580px;
    height: 380px;
  }

  @media screen and (max-width: 1400px) {
    width: 550px;
    height: 400px;
    top: 14.5%;
    left: 4%;
  }

  @media screen and (max-width: 1280px) {
    width: 520px;
    height: 380px;
    top: 12%;
    left: 4%;
  }

  @media screen and (max-width: 1024px) {
    width: 442px;
    height: 380px;
  }

  @media screen and (max-width: 884px) {
    top: 9%;
    left: 4%;
    max-width: 87%;
    width: 70%;
  }

  @media screen and (max-width: 834px) {
    top: 7%;
    left: 4%;
    max-width: 87%;
    width: 70%;
  }

  @media screen and (max-width: 820px) {
    top: 7%;
    left: 4%;
    max-width: 87%;
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    top: 8%;
    left: 4%;
    max-width: 87%;
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    top: 10%;
    left: 4%;
    max-width: 92%;
    width: 100%;
  }

  @media screen and (max-width: 428px) {
    top: 17%;
    left: 5.5%;
    max-width: 87%;
  }

  @media screen and (max-width: 414px) {
    top: 18.5%;
    left: 5.5%;
    max-width: 87%;
  }

  @media screen and (max-width: 412px) {
    top: 18.5%;
    left: 5.5%;
    max-width: 87%;
  }

  @media screen and (max-width: 390px) {
    top: 16.5%;
    left: 5.5%;
    max-width: 87%;
  }

  @media screen and (max-width: 375px) {
    top: 16.5%;
    left: 5.5%;
    max-width: 87%;
  }

  @media screen and (max-width: 360px) {
    top: 15.5%;
    left: 5.5%;
    max-width: 87%;
  }

  @media screen and (max-width: 320px) {
    top: 22%;
    left: 5.5%;
    width: 100%;
    max-width: 93%;
  }

  .IDContainer {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: auto;
    height: 40px;
    margin-bottom: -1%;

    @media screen and (max-width: 2560px) {
      position: relative;
      bottom: 3%;
  
    }

    @media screen and (max-width: 768px) {
      position: relative;
      bottom: 3%;
      left: 0%;
      font-size: 1.1em;
    }

    @media screen and (max-width: 428px) {
      position: relative;
      bottom: 16%;
      left: 0%;
      font-size: 1.19em;
    }

    @media screen and (max-width: 414px) {
      position: relative;
      bottom: 16%;
      left: 0%;
      font-size: 1.15em;
    }

    @media screen and (max-width: 412px) {
      position: relative;
      bottom: 16%;
      left: 0%;
      font-size: 1.2em;
    }

    @media screen and (max-width: 390px) {
      position: relative;
      bottom: 10.5%;
      left: 0%;
      font-size: 1.3em;
    }

    @media screen and (max-width: 375px) {
      position: relative;
      bottom: 10%;
      left: 0%;
      font-size: 1.15em;
    }

    @media screen and (max-width: 360px) {
      position: relative;
      bottom: 10%;
      left: 0%;
      font-size: 1.15em;
    }

    @media screen and (max-width: 320px) {
      position: relative;
      bottom: 10%;
      left: 0%;
    }

    .ID0 {
      font-family: "Almendra SC", serif;
      font-weight: 400;
      font-size: 5em;
      color: var(--color-escura);
    }

    .ID1 {
      font-family: "Almendra SC", serif;
      font-weight: 400;
      font-size: 3.5em;
      color: var(--color-escura);
    }

    .ID2 {
      font-weight: 400;
      font-size: 3.5em;
      font-family: "Alice", serif;
      color: var(--color-escura);
    }

    .ID3 {
      font-weight: 600;
      font-size: 4.5em;
      font-family: "Alice", serif;
      color: var(--color-orange);
    }

    .ID4 {
      width: 200px;
      margin-left: 3%;
      font-weight: 400;
      font-size: 3.5em;
      font-family: "Alice", serif;
      color: var(--color-escura);

      @media screen and (max-width: 2560px) {
      width: 300px;
    }
    }
  }

  h1 {
    font-weight: 400;
    font-size: 4.5em;
    font-family: "Allerta", sans-serif;
    color: var(--color-escura);

    @media screen and (max-width: 2560px) {
      position: relative;
      bottom: 0%;
      left: 0%;
      font-size: 4em;
    }

    @media screen and (max-width: 768px) {
      position: relative;
      bottom: 4%;
      left: 0%;
      font-size: 4em;
    }

    @media screen and (max-width: 428px) {
      position: relative;
      bottom: 17%;
      left: 0%;
      font-size: 5.5em;
    }

    @media screen and (max-width: 414px) {
      position: relative;
      bottom: 17%;
      left: 0%;
      font-size: 5.5em;
    }

    @media screen and (max-width: 412px) {
      position: relative;
      bottom: 17%;
      left: 0%;
      font-size: 5.5em;
    }

    @media screen and (max-width: 390px) {
      position: relative;
      bottom: 12%;
      left: 0%;
      font-size: 5em;
    }

    @media screen and (max-width: 375px) {
      position: relative;
      bottom: 12%;
      left: 0%;
      font-size: 5em;
    }

    @media screen and (max-width: 360px) {
      position: relative;
      bottom: 12%;
      left: 0%;
      font-size: 5em;
    }

    @media screen and (max-width: 320px) {
      position: relative;
      bottom: 12%;
      left: 0%;
    }
  }

  .P1 {
    font-weight: 400;
    font-size: 2.4em;
    line-height: 30px;
    font-family: "Alice", serif;
    color: var(--color-escura);
    white-space: nowrap;

    @media screen and (max-width: 2560px) {
      font-size: 2.4em;
    }

    @media screen and (max-width: 1920px) {
      font-size: 3.1em;
    }

    @media screen and (max-width: 1880px) {
      font-size: 3em;
    }
    
    @media screen and (max-width: 1680px) {
      font-size: 3em;
    }

    @media screen and (max-width: 1600px) {
      font-size: 3em;
    }

    @media screen and (max-width: 1440px) {
      font-size: 3em;
    }

    @media screen and (max-width: 1400px) {
      font-size: 3em;
    }

    @media screen and (max-width: 1280px) {
      font-size: 3em;
    }

    @media screen and (max-width: 768px) {
      position: relative;
      bottom: 5%;
      left: 0%;
      font-size: 3.8em;
    }

    @media screen and (max-width: 428px) {
      position: relative;
      bottom: 17.7%;
      left: 0%;
      font-size: 5em;
    }

    @media screen and (max-width: 414px) {
      position: relative;
      bottom: 17.7%;
      left: 0%;
      font-size: 5em;
    }

    @media screen and (max-width: 412px) {
      position: relative;
      bottom: 17.7%;
      left: 0%;
      font-size: 5em;
    }

    @media screen and (max-width: 390px) {
      position: relative;
      bottom: 14%;
      left: 0%;
      font-size: 4.8em;
    }

    @media screen and (max-width: 375px) {
      position: relative;
      bottom: 13%;
      left: 0%;
      font-size: 4.8em;
    }

    @media screen and (max-width: 360px) {
      position: relative;
      bottom: 13%;
      left: 0%;
      font-size: 4.8em;
    }

    @media screen and (max-width: 320px) {
      position: relative;
      bottom: 13%;
      left: 0%;
      font-size: 3.8em;
    }
  }

  .P2 {
    font-weight: 400;
    font-size: 2.4em;
    line-height: 30px;
    letter-spacing: 0.03em;
    font-family: "Alice", serif;
    color: var(--color-escura);

    @media screen and (max-width: 2560px) {
      line-height: 23px;
      font-size: 2.4em;
      line-height: 35px;
    }
    
    @media screen and (max-width: 1920px) {
      line-height: 23px;
      font-size: 3.1em;
    }

    @media screen and (max-width: 1880px) {
      line-height: 23px;
      font-size: 3em;
    }

    @media screen and (max-width: 1680px) {
      line-height: 23px;
      font-size: 3em;
    }

    @media screen and (max-width: 1600px) {
      line-height: 23px;
      font-size: 3em;
    }

    @media screen and (max-width: 1440px) {
      line-height: 23px;
      font-size: 3em;
    }

    @media screen and (max-width: 1400px) {
      line-height: 24px;
      font-size: 3em;
    }

    @media screen and (max-width: 1280px) {
      line-height: 23px;
      font-size: 3em;
    }

    @media screen and (max-width: 1024px) {
      line-height: 22px;
      font-size: 2.68em;
    }

    @media screen and (max-width: 768px) {
      position: relative;
      bottom: 5%;
      left: 0%;
      line-height: 26px;
      font-size: 3.8em;
    }

    @media screen and (max-width: 428px) {
      position: relative;
      bottom: 18.1%;
      left: 0%;
      line-height: 22px;
      font-size: 5em;
    }

    @media screen and (max-width: 414px) {
      position: relative;
      bottom: 18.1%;
      left: 0%;
      line-height: 22px;
      font-size: 5em;
    }

    @media screen and (max-width: 412px) {
      position: relative;
      bottom: 18.1%;
      left: 0%;
      line-height: 21px;
      font-size: 5em;
    }

    @media screen and (max-width: 390px) {
      position: relative;
      bottom: 15%;
      left: 0%;
      line-height: 21px;
      font-size: 4.8em;
    }

    @media screen and (max-width: 375px) {
      position: relative;
      bottom: 13.7%;
      left: 0%;
      line-height: 21px;
      font-size: 4.8em;
    }

    @media screen and (max-width: 360px) {
      position: relative;
      bottom: 13.7%;
      left: 0%;
      line-height: 21px;
      font-size: 4.8em;
    }

    @media screen and (max-width: 320px) {
      position: relative;
      bottom: 14.5%;
      left: 0%;
      line-height: 18px;
      font-size: 3.8em;
    }
  }

  span {
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    letter-spacing: 0.01em;
    font-family: "Allerta", sans-serif;
    color: var(--color-orange);
    margin-top: 1%;

    @media screen and (max-width: 2560px) {
      margin-top: 3%;
      margin-left: -0.5%;
      font-size: 3.7em;
    }

    @media screen and (max-width: 1920px) {
      margin-top: 7%;
      font-size: 3.7em;
    }

    @media screen and (max-width: 1880px) {
      margin-top: 7%;
      font-size: 3.7em;
    }

    @media screen and (max-width: 1680px) {
      margin-top: 7%;
      font-size: 3.7em;
    }

    
    @media screen and (max-width: 1600px) {
      margin-top: 7%;
      font-size: 3.7em;
    }

    @media screen and (max-width: 1440px) {
      margin-top: 7%;
      font-size: 3.7em;
    }

    @media screen and (max-width: 1400px) {
      margin-top: 3%;
      font-size: 3.7em;
    }

    @media screen and (max-width: 1280px) {
      margin-top: 10%;
      font-size: 3.5em;
    }

    @media screen and (max-width: 1024px) {
      margin-top: 19%;
      font-size: 2.8em;
    }

    @media screen and (max-width: 884px) {
      margin-top: 4%;
      margin-left: 0%;
      font-size: 2.9em; 
    }

    @media screen and (max-width: 834px) {
      margin-top: 4%;
      margin-left: 0%;
      font-size: 3em; 
    }

    @media screen and (max-width: 820px) {
      margin-top: 4%;
      margin-left: 0%;
      font-size: 3em;
    }

    @media screen and (max-width: 800px) {
      margin-top: 6%;
      margin-left: 0%;
      font-size: 3em;
    }

    @media screen and (max-width: 768px) {
      margin-top: 7%;
      margin-left: 0%;
      font-size: 2.4em;
      font-weight: 600;
      letter-spacing: 0em;
    }

    @media screen and (max-width: 428px) {
      margin-top: 49%;
      margin-left: 18%;
      font-size: 3.5em;
    }

    @media screen and (max-width: 414px) {
      margin-top: 49%;
      margin-left: 18%;
      font-size: 3.5em;
    }

    @media screen and (max-width: 412px) {
      margin-top: 71%;
      margin-left: 18%;
      font-size: 3.5em;
    }

    @media screen and (max-width: 393px) {
      margin-top: 57%;
      margin-left: 13%;
      font-size: 4em;
    }

    @media screen and (max-width: 390px) {
      margin-top: 43%;
      margin-left: 13%;
      font-size: 4em;
    }

    @media screen and (max-width: 375px) {
      margin-top: 41%;
      margin-left: 15%;
      font-size: 3.5em;
    }

    @media screen and (max-width: 360px) {
      margin-top: 65%;
      margin-left: 16%;
      font-size: 4em;
    }

    @media screen and (max-width: 320px) {
      margin-top: 17%;
      margin-left: 17%;
      font-size: 3.5em;
    }
  }
`;

export const IconsGHLD = styled.div`
  position: absolute;
  bottom: 18%;
  right: 20%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 2560px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1920px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1880px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1680px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1600px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1400px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1280px) {
    width: 100%;
    bottom: 27%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    bottom: 23%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 884px) {
    width: 100%;
    bottom: 30%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 834px) {
    width: 100%;
    bottom: 30%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    bottom: 30%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    bottom: 30%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 428px) {
    width: 100%;
    bottom: 30%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    bottom: 30%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    bottom: 33%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    bottom: 33%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    bottom: 33%;
    right: 0%;
    flex-direction: row;
    justify-content: space-around;
  }

  a {
    background-color: transparent;

    box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 2px;

    margin-top: 9%;

    img {
      width: 200px;
      height: 60px;

      @media screen and (max-width: 768px) {
        width: 155px;
        height: 45px;
        margin-top: 9%;
      }

      @media screen and (max-width: 428px) {
        width: 85px;
        height: 30px;
      }

      @media screen and (max-width: 414px) {
        width: 75px;
        height: 25px;
      }

      @media screen and (max-width: 375px) {
        width: 75px;
        height: 25px;
      }

      @media screen and (max-width: 360px) {
        width: 65px;
        height: 25px;
      }

      @media screen and (max-width: 320px) {
        width: 50px;
        height: 20px;
      }
    }
  }
`;
