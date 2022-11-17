import { TagFooter } from "./FooterCSS";
import { BsWhatsapp } from "react-icons/bs"
import { TfiEmail } from "react-icons/tfi"

const Footer = () => {
  const GitHub: string = require("../../Assets/Icones/Grupo GitHub.png");

  return (
    <TagFooter>
     
        <a href="https://github.com/fredrook" target="_blank" rel="noreferrer">
        <img src={GitHub} alt="Icone Portifólio Git Hub" />
        </a>
     
      <p>
        © Copyright 2022. Todos os direitos reservados a Frederico Rook Chaves
      </p>
      <div>
        <h2 className="whatsApp"><BsWhatsapp className="Icon1"/>(31) 9 8991-8191</h2>
        <h2 className="email"><TfiEmail className="Icon2"/>fredericorook@hotmail.com</h2>
      </div>
    </TagFooter>
  );
};

export default Footer;
