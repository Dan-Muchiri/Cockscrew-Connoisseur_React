import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import theme from "./theme";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Details from "./components/Details";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router> 
        <Header />
        <Routes> 
          <Route path="/" element={<Catalog/>} /> 
          <Route path="/details/:itemId" element={<Details />} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
