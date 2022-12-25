import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources, useColorScheme } from "@/hooks";
import Navigation from "./navigation";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "@/components";
import { useAtom } from "jotai";
import { activeThemeAtom } from "@/states/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [activeTheme] = useAtom(activeThemeAtom);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={activeTheme}>
          <StatusBar />
          <Navigation colorScheme={colorScheme} />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
