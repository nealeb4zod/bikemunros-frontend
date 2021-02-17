import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContainer from "./containers/MainContainer";
import { Fonts } from "./Fonts";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

function App() {
  const [munroList, setMunroList] = useState([]);
  const [filteredMunroList, setFilteredMunroList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const allPages = [];
    for (let i = 1; i < 16; i++) {
      allPages.push(
        fetch(`https://api.bikemunros.co.uk/munros/page?page=${i}`)
      );
    }
    Promise.all(allPages)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        let allMunros = [];
        data.forEach((page) => {
          page.content.forEach((munro) => allMunros.push(munro));
        });
        setMunroList(allMunros);
        setFilteredMunroList(allMunros);
      });
  }, []);

  const updateInput = async (input) => {
    const filtered = munroList.filter((munro) => {
      return munro.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setFilteredMunroList(filtered);
  };

  return (
    <ChakraProvider theme={theme}>
      <MainContainer
        filteredMunroList={filteredMunroList}
        input={input}
        onChange={updateInput}
      />
    </ChakraProvider>
  );
}

export default App;
