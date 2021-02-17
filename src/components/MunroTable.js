import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
} from "@chakra-ui/react";
import MunroTableRow from "./MunroTableRow";
import SearchBar from "./SearchBar";

const MunroTable = ({ filteredMunroList, input, onChange }) => {
  return (
    <>
      <SearchBar input={input} onChange={onChange} />
      <Table variant="striped" colorScheme="blue">
        <TableCaption>Munros</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Region</Th>
            <Th isNumeric>Height(metres)</Th>
            <Th isNumeric>Height(feet)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredMunroList.map((munro, index) => {
            return <MunroTableRow munro={munro} key={index} />;
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Region</Th>
            <Th isNumeric>Height(metres)</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default MunroTable;
