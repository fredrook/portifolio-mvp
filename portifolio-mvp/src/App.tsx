import Header from "./Components/Header/Header";

import FRC from "./Pages/Dashboard/Dashboard";
import { Main } from "./AppCSS";

import AuthContext from "./Context/AuthContext";
import NavBarModal from "./Pages/ModalNavBar/ModalNavBar";

function App() {
  return (
    <AuthContext>
      {/* <NavBarModal/> */}
        <Header />
    {/*   <Main>
        <FRC/>
      </Main> */}
    </AuthContext>
  );
}

export default App;
