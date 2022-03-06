import { defaultTheme, Provider as ThemeProvider } from "@adobe/react-spectrum";

import { UserInterface } from "../components/Layout";
import { QueryClientProvider } from "../components/QueryClient";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <QueryClientProvider>
        <UserInterface />
    </QueryClientProvider>
  </ThemeProvider>
  )
}
