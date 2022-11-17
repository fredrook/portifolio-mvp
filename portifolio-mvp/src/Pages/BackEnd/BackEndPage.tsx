import React from "react";
import { TagContainer } from "./BackEndPageCSS";

const BackEndPage = () => {
  const PY: string = require("../../Assets/BackEnd/Python.png");
  const Redis: string = require("../../Assets/BackEnd/Redis.png");
  const NodeJS: string = require("../../Assets/BackEnd/NodeJS.png");
  const Django: string = require("../../Assets/BackEnd/DJango.png");
  const MongoDB: string = require("../../Assets/BackEnd/MongoDB.png");
  const TypeORM: string = require("../../Assets/BackEnd/TypeORM.png");
  const Docker: string = require("../../Assets/BackEnd/Docker.png");
  const AWS: string = require("../../Assets/BackEnd/AmazomAWS.png");
  const RestAPI: string = require("../../Assets/BackEnd/RestAPI.png");
  const PSQL: string = require("../../Assets/BackEnd/PostgresSQL 2.png");
  const Jest: string = require("../../Assets/BackEnd/Jest.png");

  return (
    <TagContainer>
      <div className="DivIcons">
        <img src={PY} alt="Python" className="PythonIcon" />
        <img src={Redis} alt="Redis" className="Redis" />
        <img src={NodeJS} alt="NodeJS" className="NJS" />
        <img src={Django} alt="DJango" className="DJG" />
        <img src={MongoDB} alt="MongoDB" className="MDB" />
        <img src={TypeORM} alt="TypeORM" className="TORM" />
        <img src={Docker} alt="Docker" className="Docker" />
        <img src={AWS} alt="AmazomAWS" className="AWS" />
        <img src={RestAPI} alt="RestAPI" className="RAPI" />
        <img src={PSQL} alt="PostgresSQL" className="PSQL" />
        <img src={Jest} alt="Jest" className="Jest" />
      </div>
      <span>Back End</span>
      <div className="TextFrontEnd">
        <h2>
          Currently performing the specialization in Back End, through Kenzie
          Academy Brasil, I am specializing in certain languages and
          technologies, with a focus on database, creation, maintenance and
          consumption of API's, with the help of frameworks. Already mastering
          the following languages, such as TypeScript, NodeJS, with Python under
          development, allying with Know how, technologies such as PostgreSQL,
          Docker, Jest, RestAPI, DBeaver, Insomnia, are being studied and used.
        </h2>
      </div>
    </TagContainer>
  );
};

export default BackEndPage;
