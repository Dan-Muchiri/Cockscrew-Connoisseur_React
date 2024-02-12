import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import theme from "./theme";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Details from "./components/Details";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router> 
        <Header />
        <Routes> 
          <Route path="/" element={<Catalog/>} /> 
          <Route path="/details/:itemId" element={<Details />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
