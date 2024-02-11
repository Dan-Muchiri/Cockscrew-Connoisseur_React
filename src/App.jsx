import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme"; 
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Details from "./components/Details";

function App() {
  return (
    <ChakraProvider theme={theme}> 
      <Header />
      <Catalog />
      <Details />
    </ChakraProvider>
  );
}

export default App;
