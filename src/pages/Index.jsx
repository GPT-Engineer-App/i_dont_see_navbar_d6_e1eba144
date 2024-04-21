import React, { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Select, Button, Flex, Heading, Text, useToast, IconButton, useColorMode } from "@chakra-ui/react";
import { FaUserEdit, FaMoon, FaSun } from "react-icons/fa";

// Mock data for users and roles
const usersData = [
  { id: 1, name: "Alice Smith", role: "User" },
  { id: 2, name: "Bob Johnson", role: "Admin" },
  { id: 3, name: "Charlie Williams", role: "Editor" },
  // Add more users if needed
];

const rolesData = ["User", "Admin", "Editor"];

const Index = () => {
  const [users, setUsers] = useState(usersData);
  const toast = useToast();

  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map((user) => (user.id === userId ? { ...user, role: newRole } : user));
    setUsers(updatedUsers);
    toast({
      title: "Role updated.",
      description: `User's role has been updated to ${newRole}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p={8}>
      <Flex mb={4} justify="space-between" align="center">
        <Heading as="h1" size="xl">
          Admin Dashboard
        </Heading>
        <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Role</Th>
            <Th textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>
                <Select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                  {rolesData.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </Select>
              </Td>
              <Td textAlign="center">
                <Button leftIcon={<FaUserEdit />} colorScheme="teal" variant="outline" onClick={() => {}}>
                  Update
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Flex mt={4} justify="flex-end">
        <Button colorScheme="blue" mr={3}>
          Save Changes
        </Button>
        <Button variant="ghost">Cancel</Button>
      </Flex>
    </Box>
  );
};

export default Index;
