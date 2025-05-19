import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
  return useFonts({
    'JetBrainsMono-Regular': require('../assets/fonts/JetBrainsMono-Regular.otf'),
    'JetBrainsMono-Light': require('../assets/fonts/JetBrainsMono-Light.otf'),
    'JetBrainsMono-Bold': require('../assets/fonts/JetBrainsMono-Bold.otf'),
  });
};
