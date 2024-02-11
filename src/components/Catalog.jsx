import { Box, Text, VStack, Image, Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useColorModeValue } from '@chakra-ui/react';

function Catalog() {
  const [items, setItems] = useState([]);
  const textColor = useColorModeValue("wine.red", "white"); 


  useEffect(() => {
    fetch("http://localhost:3000/wines")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  // Function to handle adding an item to the cart
  const handleAddToCart = (itemId) => {
    // Logic to add item to the cart goes here
    console.log(`Item with ID ${itemId} added to cart.`);
  };

  return (
    <Box mt={3} maxW="70%" maxH='80vh' overflowY='auto'>
      <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
        Catalog
      </Text>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="stretch" gap={2}>
        {items.map((item) => (
          <Box
            key={item.id}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            width="250px"
            minHeight="400px"
            mb={4}
            borderWidth="1px"
            borderColor="gray.200"
            transition="all 0.2s"
            _hover={{
              boxShadow: "lg",
              borderColor: "wine.red",
            }}
          >
            <Image
              src={item.url}
              alt={item.name}
              objectFit="cover"
              borderTopRadius="md"
              height="200px"
            />
            <VStack spacing={2} align="center" mt={4}>
              <Text fontSize="md" mb={1} color={textColor}>
                {item.name}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={2} color={textColor}>
                ${item.price}
              </Text>
              <Button onClick={() => handleAddToCart(item.id)}>
                Add to Cart
              </Button>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Catalog;
