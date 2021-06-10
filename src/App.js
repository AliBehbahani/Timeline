import "./App.css";
import Timeline from "./components/TimelineList";
import { Title, GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
const theme = {
  backgroundColor: "#EFF2F1",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div>
        <Title>MY TIMELINE</Title>
      </div>

      <Timeline />
    </ThemeProvider>
  );
}

export default App;
