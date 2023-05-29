import merge from "deepmerge";

import defaultDictionary from "./default";
import englishDictionary from "./english";

const selectDictionary = (language: string) => {
  let selectedlanguage;

  switch (language.toUpperCase()) {
    case "US":
      selectedlanguage = englishDictionary();
      break;

    default:
      selectedlanguage = {};
      break;
  }

  const overwriteMerge = (destinationArray: any, sourceArray: any, options: any) =>
    sourceArray;

  return merge(defaultDictionary(), selectedlanguage, {
    arrayMerge: overwriteMerge,
  });
};

export default selectDictionary;
