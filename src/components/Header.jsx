import { Box, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Icon } from "@chakra-ui/react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { useColorModeValue } from '@chakra-ui/react';

function Header() {
  const bgColor = useColorModeValue("white", "wine.red"); // Set background color based on color mode
  const textColor = useColorModeValue("wine.red", "white"); // Set text color based on color mode

  return (
    <Box bg={bgColor} boxShadow="sm" py={4}>
      <Flex align="center" justify="space-between" maxW="6xl" mx="auto">
        <Heading as="h1" fontSize="3xl" fontWeight="bold" color={textColor} fontFamily='Dancing Script'>
          Cockscrew Connoisseur
        </Heading>

        {/* Navigation Links */}
        <Flex>
          <Link mr={4} color={textColor} _hover={{ textDecoration: "underline" }}>Home</Link>
          <Link mr={4} color={textColor} _hover={{ textDecoration: "underline" }}>About</Link>
          <Link mr={4} color={textColor} _hover={{ textDecoration: "underline" }}>Login | SignUp</Link>
        </Flex>

        {/* Search Bar */}
        <InputGroup maxW="md" mr={4}>
          <Input placeholder="Search wines" variant="filled" />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              bg="transparent"
              color={textColor}
              _hover={{ color: "wine.gold" }}
            />
          </InputRightElement>
        </InputGroup>

        {/* Cart Icon */}
        <IconButton
          aria-label="Shopping Cart"
          icon={<Icon as={FaCartPlus} boxSize={6} />} 
          bg="transparent"
          color={textColor}
          _hover={{ color: "wine.gold" }}
        />
      </Flex>
    </Box>
  );
}

export default Header;
