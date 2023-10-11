import { Box, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import React from "react";
import NavBar from "../Components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page does not exist"
            : "An unExpected error ocuured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
