import { Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  return (
    <Input
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Filter munros..."
    ></Input>
  );
};

export default SearchBar;
