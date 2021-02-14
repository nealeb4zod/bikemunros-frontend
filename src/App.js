import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import MainContainer from "./containers/MainContainer";
import { Fonts } from "./Fonts";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

function App() {
  return (
    <ChakraProvider them={theme}>
      <MainContainer />
    </ChakraProvider>
  );
}

export default App;
