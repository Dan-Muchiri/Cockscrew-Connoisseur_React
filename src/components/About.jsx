import { Box, Heading, Text, Divider, Icon, Flex } from "@chakra-ui/react";
import { FaWineBottle } from "react-icons/fa";

function About() {
  return (
    <Box pt="100px" maxW="80%" mx="auto" textAlign="justify">
      <Heading as="h2" fontSize="3xl" mb="6" textAlign="left" color="wine.red" fontFamily="Lobster">
        About Us
      </Heading>
      <Text fontSize="3xl" mb="8" color="gray.700" fontFamily="Rancho">
        Welcome to Cockscrew Connoisseur, your premier destination for discovering and enjoying the world's finest wines. Our passion for wine runs deep, and we're dedicated to sharing that passion with you. Whether you're a seasoned oenophile or just beginning your journey into the world of wine, we're here to guide you every step of the way.
      </Text>

      <Divider mb="8" />

      <Heading as="h3" fontSize="2xl" mb="6" color="wine.red" fontFamily="Lobster">
        Our Mission
      </Heading>
      <Text fontSize="3xl" mb="8" color="gray.700" fontFamily="Rancho">
        At Cockscrew Connoisseur, our mission is simple: to provide you with an unparalleled wine-buying experience. We strive to offer a carefully curated selection of wines from around the globe, each chosen for its exceptional quality and unique character. We believe that every bottle tells a story, and we're here to help you discover the perfect wine for any occasion.
      </Text>

      <Divider mb="8" />

      <Heading as="h3" fontSize="2xl" mb="6" color="wine.red" fontFamily="Lobster">
        Our Team
      </Heading>
      <Text fontSize="3xl" mb="4" color="gray.700" fontFamily="Rancho">
        Our team of wine experts is dedicated to bringing you the best selection of wines available. With years of experience in the industry, our sommeliers and connoisseurs are passionate about sharing their knowledge and expertise with you. Whether you're looking for recommendations, food pairings, or tasting notes, our team is here to help you navigate the world of wine with confidence and ease.
      </Text>
      <Text fontSize="3xl" mb="8" color="gray.700" fontFamily="Rancho">
        Meet the faces behind Cockscrew Connoisseur and discover why we're your trusted source for exceptional wines.
      </Text>

      <Divider mb="8" />

      <Heading as="h3" fontSize="2xl" mb="6" color="wine.red" fontFamily="Lobster">
        Our Commitment to Quality
      </Heading>
      <Text fontSize="3xl" mb="8" color="gray.700" fontFamily="Rancho">
        Quality is at the heart of everything we do. From our rigorous selection process to our commitment to customer satisfaction, we hold ourselves to the highest standards in the industry. Every wine in our collection is carefully vetted to ensure it meets our strict criteria for excellence, so you can shop with confidence knowing that you're getting the best of the best.
      </Text>

      <Divider mb="8" />

      <Heading as="h3" fontSize="2xl" mb="6" color="wine.red" fontFamily="Lobster">
        Contact Us
      </Heading>
      <Flex alignItems="center" mb="4">
        <Icon as={FaWineBottle} boxSize={6} color="wine.red" mr="2" />
        <Text fontSize="3xl" color="gray.700" fontFamily="Rancho">
          Have questions or need assistance? We're here to help! Contact our customer service team for personalized recommendations, order assistance, or any other inquiries you may have.
        </Text>
      </Flex>
      <Text fontSize="lg" mb="8" color="gray.700">
        Email: <Text as="span" color="wine.red">info@cockscrewconnoisseur.com</Text>
        <br />
        Phone: <Text as="span" color="wine.red">1-800-WINE-LOVE</Text>
      </Text>
    </Box>
  );
}

export default About;
