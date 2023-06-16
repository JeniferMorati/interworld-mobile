import {
  Box,
  Flex,
  Heading,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useDictionary } from "../../hooks/useDictionary";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InfoBox from "../../components/InfoBox";

const About = () => {
  const { about: dictionary } = useDictionary();

  return (
    <ScrollView>
      <Flex justifyItems="start" alignItems="start" px="4" py="5">
        <Heading>{dictionary.title}</Heading>
        <Text fontWeight="thin" lineHeight="md" fontSize="md" mt="4">
          {dictionary.textaboutus}
        </Text>
        <VStack w="full" mt="5" space={2}>
          <InfoBox
            icon="eye-outline"
            title={dictionary.vision}
            description={dictionary.visionp}
          />
          <InfoBox
            icon="sword-cross"
            title={dictionary.mission}
            description={dictionary.missionp}
          />
          <InfoBox
            icon="book"
            title={dictionary.values}
            description={dictionary.valuesp}
          />
        </VStack>
      </Flex>
    </ScrollView>
  );
};

export default About;
