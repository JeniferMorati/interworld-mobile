import React from "react";
import { useDictionary } from "../../hooks/useDictionary";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Row,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import InfoBox from "../../components/InfoBox";

const Home = () => {
  const navigation = useNavigation();
  const { home: dictionary, travel, faq } = useDictionary();

  return (
    <ScrollView>
      <Flex justifyItems="start" alignItems="start" px="4" py="5">
        <Heading fontSize="2xl">
          {dictionary.slidertext1}{" "}
          <Text color="purple.600">{dictionary.slidertext2}</Text>
        </Heading>
        <Text fontSize="lg">
          {dictionary.description1} {dictionary.description2}
        </Text>
        <Row width="100%" mt={3} alignItems="center" justifyContent="center">
          <Image
            height={300}
            width={300}
            source={require("../../assets/location.png")}
          />
        </Row>
        <Button
          onPress={() => navigation.navigate("Budget")}
          backgroundColor="purple.600"
          width="full"
          marginBottom="10"
        >
          Fazer orçamento
        </Button>
        <Heading fontSize="xl">{dictionary.title}</Heading>
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
        <Heading marginTop="5" color="purple.600">
          FAQ
        </Heading>
        <Text>{faq.disclaimer}</Text>
        <VStack w="full" mt="5" space={2}>
          {faq.questions.map((question) => (
            <InfoBox
              icon={question.icon}
              title={question.question}
              description={question.answer}
            />
          ))}
        </VStack>
      </Flex>
    </ScrollView>
  );
};

export default Home;
