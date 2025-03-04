
import { ThemeProvider } from "@/hooks/use-theme";
import App from "./App";

export default function ThemeWrapper() {
  return (
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  );
}
