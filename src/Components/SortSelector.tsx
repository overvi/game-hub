import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by
      </MenuButton>
      <MenuList>
        <MenuItem>Relvant</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Relase Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Avrage rating</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
