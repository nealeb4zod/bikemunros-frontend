import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex width="full" justifyContent="space-between" p="2">
      <Breadcrumb p="2" separator="-">
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactLink} to="/map">
            Map
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={ReactLink} to="/list">
            List
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

export default NavBar;
