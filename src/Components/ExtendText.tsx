import { Button, Text } from "@chakra-ui/react";
import useGamesDetails from "../hooks/useGamesDetails";
import { useState } from "react";

interface Props {
  children: string;
}
const ExtendText = ({ children }: Props) => {
  const [extended, setExtended] = useState(false);
  const limit = 300;

  if (children.length < limit) return;
  return (
    <>
      <Text display="inline">
        {!extended ? children.substring(0, limit) : children}...
      </Text>
      <Button
        onClick={() => setExtended(!extended ? true : false)}
        marginLeft={1}
      >
        {extended ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};

export default ExtendText;
