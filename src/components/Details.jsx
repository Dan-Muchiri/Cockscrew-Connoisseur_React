import { Box, Text, VStack, Image, Flex, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Details() {
  const { itemId } = useParams(); // Get the item ID from URL parameters
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    // Fetch details from db.json based on the item ID
    fetch(`http://localhost:3000/wines/${itemId}`)
      .then((response) => response.json())
      .then((data) => setItemDetails(data))
      .catch((error) => console.error("Error fetching item details:", error));
  }, [itemId]);

  const textColor = useColorModeValue("wine.red", "white"); 

  function handleAddToCart(item){

  }

  return (
    <Box pt='90px' maxW="100%" textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={2}>
        Details
      </Text>
      {itemDetails ? (
        <Flex alignItems='start' justifyContent='space-around'>
          <Box>
            <Image
              src={itemDetails.url}
              alt={itemDetails.name}
              objectFit="cover"
              borderTopRadius="md"
              height="200px"
            />
            <Button mt={14} mr={4} onClick={() => handleAddToCart(itemDetails)}>
                Add To Cart
            </Button>
            <Link to="/">
                <Button mt={14}>
                    Back to Catalog
                </Button>
            </Link>
          </Box>
          <Box
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            textAlign="left"
            width="700px"
            minHeight="400px"
            mb={4}
            borderWidth="1px"
            borderColor="gray.200"
            transition="all 0.2s"
          >
            <VStack spacing={2} align="start" mt={4} px={4}>
              <Text fontSize="md" mb={1} color={textColor}>
                Name: {itemDetails.name}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Type: {itemDetails.type}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Description: {itemDetails.description}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Food Pairing: {itemDetails.food_pairing}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Region: {itemDetails.region}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Vintage: {itemDetails.vintage}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Producer: {itemDetails.producer}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Alcohol by Volume: {itemDetails.abv}%
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Awards: {itemDetails.awards}
              </Text>
              <Text fontSize="md" mb={1} color={textColor}>
                Availability: {itemDetails.availability}
              </Text>
              <Text fontSize="md" fontWeight="bold" mb={2} color={textColor}>
                ${itemDetails.price}
              </Text>
            </VStack>
          </Box>
        </Flex>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
}

export default Details;
