import { Flex, Box } from "@chakra-ui/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

// Create a router instance
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
      {/* Add more routes here as needed */}
    </>,
  ),
);

function App() {
  return (
    <RouterProvider router={router}>
      <Flex>
        <Navbar />
        <Box width="80%">{/* Route components will be rendered here based on the router instance */}</Box>
      </Flex>
    </RouterProvider>
  );
}

// Define routes array
const routes = [
  { path: "/", component: Index },
  { path: "/users", component: Users },
  { path: "/settings", component: Settings },
  // Add more routes here as needed
];

export default App;
