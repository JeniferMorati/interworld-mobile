import { useMainContext } from '../context/main';

export const useDictionary = () => {
  const { dictionary } = useMainContext();

  return dictionary;
}