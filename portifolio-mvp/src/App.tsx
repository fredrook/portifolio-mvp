import AuthContext from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import { AppDiv } from "./AppCSS";

function App() {
  return (
    <ChakraProvider>
      <AuthContext>
        <AppDiv>
          <Dashboard />
        </AppDiv>
      </AuthContext>
    </ChakraProvider>
  );
}

export default App;
