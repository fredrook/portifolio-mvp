import { TagFooter } from "./FooterCSS";

const Footer = () => {
  const GitHub: string = require("../../Assets/Icones/Grupo GitHub.png");

  return (
    <TagFooter>
      <button>
        <link rel="stylesheet" href="https://github.com/fredrook" />
        <img src={GitHub} alt="Icone Portifólio Git Hub" />
      </button>
      <p>
        © Copyright 2022. Todos os direitos reservados a Frederico Rook Chaves
      </p>
      <div>
        <h2 className="whatsApp">(31) 9 8991-8191</h2>
        <h2 className="email">fredericorook@hotmail.com</h2>
      </div>
    </TagFooter>
  );
};

export default Footer;
