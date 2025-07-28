import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      {/* Turning off the ugly header on top of the screens */}

      {/* Navigator for the (tabs) group */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      {/* Navigator for the movie detail page */}
      <Stack.Screen
        name="movie/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}