import AuthContext from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { AppDiv } from "./AppCSS"

function App() {
  return (
    <AuthContext>
      <AppDiv>
      <Dashboard/>
      </AppDiv>
    </AuthContext>
  );
}

export default App;
