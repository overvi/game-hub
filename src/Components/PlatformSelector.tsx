import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: number) => void;
  selectedPlatform?: number;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const platformName = data.results.find(
    (platform) => platform.id == selectedPlatform
  )?.name;

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName || "PLATFORM"}
      </MenuButton>
      <MenuList>
        {data.results.map((data) => (
          <MenuItem onClick={() => onSelectPlatform(data.id)} key={data.id}>
            {data.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
