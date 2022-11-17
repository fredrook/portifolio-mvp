import styled from "styled-components";

export const TagContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5vw;

  .DivIcons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 140px;
    height: 10vh;

    .Redis {
      position: relative;
      top: 435%;
      right: 10%;
      width: 105px;
      height: 115px;
    }

    .NJS {
      position: relative;
      top: 310%;
      right: 10%;
      width: 100px;
      height: 115px;
    }

    .DJG {
      position: relative;
      top: 425%;
      right: 11%;
      width: 110px;
      height: 115px;
    }

    .MDB {
      position: relative;
      top: 315%;
      right: 11%;
      width: 90px;
      height: 90px;
    }

    .TORM {
      position: relative;
      top: 425%;
      right: 11%;
      width: 100px;
      height: 103px;
    }

    .Docker {
      position: relative;
      top: 425%;
      right: 1%;
      width: 95px;
      height: 95px;
    }

    .AWS {
      position: relative;
      top: 315%;
      right: 2%;
      width: 105px;
      height: 105px;
    }

    .RAPI {
      position: relative;
      top: 445%;
      right: 3%;
      width: 115px;
      height: 95px;
    }

    .PSQL {
      position: relative;
      top: 330%;
      right: 3%;
      width: 88px;
      height: 88px;
    }

    .Jest {
      position: relative;
      top: 440%;
      right: 3%;
      width: 95px;
      height: 88px;
    }

    .PythonIcon {
      position: relative;
      bottom: 0%;
      left: 22%;
      width: 130px;
      height: 15vh;
      pointer-events: none;
      animation: PythonRotate infinite 20s linear;
    }
  }

  span {
    position: relative;
    bottom: 59%;
    left: 59%;
    font-weight: 400;
    font-size: 2em;
    line-height: 44px;
    text-decoration: underline;
    color: var(--color-orange);
  }

  .TextFrontEnd {
    position: relative;
    bottom: 74%;
    left: 55%;
    margin-top: 109px;
    margin-left: 76px;
    width: 675px;
    height: 270px;

    h2 {
      font-weight: 400;
      font-size: 1.42em;
      line-height: 40px;
      text-align: justify;
    }
  }

  @keyframes PythonRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
