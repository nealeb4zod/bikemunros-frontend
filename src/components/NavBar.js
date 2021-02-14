import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Breadcrumb separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink as={ReactLink} to="/">
          Map
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={ReactLink} to="/list">
          List
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default NavBar;
