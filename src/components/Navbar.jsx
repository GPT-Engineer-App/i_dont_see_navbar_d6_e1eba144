import React from "react";
import { Box, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box width="20%" height="full" borderRightWidth="1px">
      <VStack as="nav" spacing={4} align="stretch" mt={8}>
        <Link as={RouterLink} to="/" padding={2}>
          Dashboard
        </Link>
        <Link as={RouterLink} to="/users" padding={2}>
          Users
        </Link>
        <Link as={RouterLink} to="/settings" padding={2}>
          Settings
        </Link>
        {/* Add additional navigation links here */}
      </VStack>
    </Box>
  );
};

export default Navbar;
