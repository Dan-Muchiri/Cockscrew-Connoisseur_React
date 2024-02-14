import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, IconButton, Image, Icon, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCartStore from '../store';

function Header() {
  const bgColor = "white"
  const textColor ="wine.red"

  const [activeUser, setActiveUser] = useState(null);
  const { cartItems, fetchCartItems } = useCartStore();

  useEffect(() => {
    const fetchActiveUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/active-user');
        const userData = await response.json();
        setActiveUser(userData[0].username);
      } catch (error) {
        console.log('Not logged in');
      }
    };

    fetchActiveUser();
    fetchCartItems();
  }, [cartItems]); // Trigger the effect whenever cartItems changes

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3000/active-user/1', {
        method: 'DELETE',
      });
      setActiveUser(null);
      alert('Thank you for shopping with us!')
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


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
         <Heading
          as="h1"
          fontSize={{ base: "xl", md: "5xl" }}
          fontWeight="bold" // Increase the font weight to extrabold
          color={textColor}
          fontFamily="Rancho"
        >
          Corkscrew Connoisseur
        </Heading>

        </Flex>
       

        {/* Navigation Links */}
        <Flex>
          <Box as={Link} to="/" mr={10} fontSize='18px'  color={textColor} _hover={{ textDecoration: "underline" }}>Home</Box>
          <Box as={Link} to="/about" mr={10} fontSize='18px' color={textColor} _hover={{ textDecoration: "underline" }}>About</Box>
          {activeUser ? (
          <>
            <Box as={Link}  mr={10}  fontSize='18px' color={textColor} _hover={{ textDecoration: "underline" }} onClick={handleLogout}>Sign out</Box>
            <Text  fontWeight='bold' fontSize='18px' color={textColor} >{activeUser}</Text>
          </>
        ) : (
          <Box as={Link} to="/login" mr={10}  fontSize='18px' color={textColor} _hover={{ textDecoration: "underline" }}>Login | SignUp</Box>
        )}
        </Flex>

        {/* Cart Icon */}
        <Flex as={Link} to="/cart" alignItems="center">
          <IconButton
            aria-label="Shopping Cart"
            icon={<Icon as={FaCartPlus} boxSize={7} />} 
            bg="transparent"
            borderStyle='none'
            color={textColor}
            _hover={{ color: "wine.gold" }}
          />
          <Text ml={1}>{cartItems}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
