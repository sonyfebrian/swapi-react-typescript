import { defaultTheme, Provider as ThemeProvider } from "@adobe/react-spectrum";

import { UserInterface } from "./Layout";
import { QueryClientProvider } from "./QueryClient";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider>
       
          <UserInterface />
       
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
