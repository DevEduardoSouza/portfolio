import { ThemeProvider } from "styled-components";

import { Home } from "./pages/home/Home";
import theme from "./theme/theme";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
