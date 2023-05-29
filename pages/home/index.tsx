import React from "react";
import { useDictionary } from "../../hooks/useDictionary";
import { ImageBackground } from "react-native";

import { Box, Flex, Heading, Row, ScrollView, Text, VStack } from "native-base";

const Home = () => {
  const { home: dictionary, travel } = useDictionary();

  return (
    <ScrollView>
      <Flex justifyItems="start" alignItems="start" px="4" py="5">
        <Heading>{dictionary.title}</Heading>
        <Row mt={3} alignItems="center" justifyContent="center">
          <Text fontSize="md">
            {dictionary.description1}
            <Text fontWeight="semibold" color="purple.600">
              {" "}
              {dictionary.description2}
            </Text>
          </Text>
        </Row>
        <VStack mt="5" direction="column" space={2} w="full">
          {travel.countries.map((countrie) => (
            <Box overflow="hidden" rounded="md" shadow="3" maxW="lg">
              <ImageBackground source={countrie.image} resizeMode="cover">
                <Box h="32">
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    p={2}
                    bgColor="black"
                    opacity={0.8}
                    w="full"
                  >
                    <Text color="white">{countrie.name}</Text>
                  </Box>
                </Box>
              </ImageBackground>
            </Box>
          ))}
        </VStack>
      </Flex>
    </ScrollView>
  );
};

export default Home;
