import { Box, Text, VStack, Image, Flex, Button, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useColorModeValue } from '@chakra-ui/react';
import useStore from "../store";
import { Link } from "react-router-dom";

function Catalog() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const textColor = useColorModeValue("wine.red", "white"); 

  const setSelectedItem = useStore((state) => state.setSelectedItem); // Get the setSelectedItem function from the store

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    fetch("http://localhost:3000/wines")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const filteredItems = items.filter(item => {
    const vintageLowerCase = item.vintage.toString().toLowerCase();
    const abvLowerCase = item.abv.toString().toLowerCase(); // Convert abv to string and lowercase
    const searchQueryLowerCase = searchQuery.toLowerCase();
    
    return (
      item.type.toLowerCase().includes(searchQueryLowerCase) ||
      item.name.toLowerCase().includes(searchQueryLowerCase) ||
      item.description.toLowerCase().includes(searchQueryLowerCase) ||
      item.region.toLowerCase().includes(searchQueryLowerCase) ||
      item.producer.toLowerCase().includes(searchQueryLowerCase) ||
      vintageLowerCase.includes(searchQueryLowerCase) ||
      abvLowerCase.includes(searchQueryLowerCase) // Include abv in search
    );
  });
  return (
    <Flex alignItems='center' justifyContent='center' direction='column' pt='75px'>
      <Box mt={4} maxW="90%" >
        <Text fontSize="2xl" fontWeight="bold" mb={2} textAlign="center">
          Catalog
        </Text>
        <Flex justifyContent='center' alignItems='center'>
          <Input
            placeholder="Search wines"
            variant="filled"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            mb={5}
            maxW='90%'
            boxShadow="md"
          />
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="stretch" gap={2}>
          {filteredItems.map((item) => (
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
                <Link to={`/details/${item.id}`} key={item.id}>
                  <Button onClick={() => handleSelectItem(item)}>Preview</Button>
                </Link>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Catalog;
