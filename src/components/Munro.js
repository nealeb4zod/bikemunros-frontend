import { Progress } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const Munro = ({ munroList }) => {
  const params = useParams();
  const getMunro = (munro) => munro.id === parseInt(params.id);
  const munro = munroList.find(getMunro);

  if (!munro) {
    return <Progress size="xs" isIndeterminate />;
  }
  return <div>{munro.name}</div>;
};

export default Munro;
