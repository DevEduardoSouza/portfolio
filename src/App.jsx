import { ThemeProvider } from "styled-components";

import theme from "./theme/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { AppRoutes } from "./routes";


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
