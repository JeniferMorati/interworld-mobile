import React from "react";
import { Box, Flex, Spacer, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const InfoBox = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <Box
      color="white"
      shadow="2"
      bgColor="purple.600"
      p="2"
      w="full"
      rounded="md"
    >
      <Flex justifyItems="start" alignItems="start">
        <Flex direction="row" justifyItems="center" alignItems="center">
          <MaterialCommunityIcons name={icon} size={20} color="white" />
          <Spacer />
          <Text ml="2" fontWeight="semibold" color="white">
            {title}
          </Text>
        </Flex>
        <Text color="white">{description}</Text>
      </Flex>
    </Box>
  );
};

export default InfoBox;
