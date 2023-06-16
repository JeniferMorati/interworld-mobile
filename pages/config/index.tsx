import { Heading, Radio, ScrollView, VStack } from "native-base";
import React from "react";
import { useMainContext } from "../../context/main";
import { TLanguage } from "../../types";
import { Text } from "native-base";
import { useDictionary } from "../../hooks/useDictionary";

const Config = () => {
  const { config: dictionary } = useDictionary();
  const { language, setLanguage } = useMainContext();

  return (
    <ScrollView>
      <VStack p={4} alignItems="start" justifyContent="center" space={2}>
        <Heading pb={5}>{dictionary.title}</Heading>
        <Text fontSize="lg">{dictionary.languages}</Text>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="Language"
          value={language}
          onChange={(nextValue) => {
            setLanguage(nextValue as TLanguage);
          }}
          colorScheme="purple"
        >
          <Radio value="BR" my={1}>
            Português BR
          </Radio>
          <Radio value="US" my={1}>
            English US
          </Radio>
        </Radio.Group>
      </VStack>
    </ScrollView>
  );
};

export default Config;
