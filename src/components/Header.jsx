import { Box, Flex, Heading, IconButton, Image, Icon, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Header() {
  const bgColor = useColorModeValue("white", "wine.red"); // Set background color based on color mode
  const textColor = useColorModeValue("wine.red", "white"); // Set text color based on color mode

  return (
    <Box bg={bgColor} boxShadow="sm" py={1} position='fixed' w='100%' zIndex={10}>
      <Flex align="center" justify="space-between" maxW="6xl" mx="auto">

        <Flex alignItems='center'>
        <Image
              src='src/assets/bottle and glass.avif'
              alt='Bootle $ glass icon'
              objectFit="contain"
              height='69px'
            />
          <Heading as="h1" fontSize="3xl" fontWeight="bold" color={textColor} fontFamily='Dancing Script'>
            Cockscrew Connoisseur
          </Heading>
        </Flex>
       

        {/* Navigation Links */}
        <Flex>
          <Box as={Link} to="/" mr={10} color={textColor} _hover={{ textDecoration: "underline" }}>Home</Box>
          <Box as={Link} to="/about" mr={10} color={textColor} _hover={{ textDecoration: "underline" }}>About</Box>
          <Box as={Link} to="/login" mr={10} color={textColor} _hover={{ textDecoration: "underline" }}>Login | SignUp</Box>
        </Flex>

        {/* Cart Icon */}
        <Flex alignItems="center">
          <IconButton
            aria-label="Shopping Cart"
            icon={<Icon as={FaCartPlus} boxSize={6} />} 
            bg="transparent"
            color={textColor}
            _hover={{ color: "wine.gold" }}
          />
          <Text ml={1}>0</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
