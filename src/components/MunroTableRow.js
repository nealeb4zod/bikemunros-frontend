import { Link, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";

const MunroTableRow = ({ munro }) => {
  return (
    <Tr>
      <Td>
        <Link as={ReactLink} to={`/munro/${munro.id}`}>
          {munro.name}
        </Link>
      </Td>
      <Td>{munro.county}</Td>
      <Td>{munro.heightMetres}</Td>
      <Td>{munro.heightFeet}</Td>
    </Tr>
  );
};

export default MunroTableRow;
