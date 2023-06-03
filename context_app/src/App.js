import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import ThemeProvider from "./components/context/ThemeContext";



function App() {
  return (
    <>
  <ThemeProvider>
        <Header />
        <Main />
        </ThemeProvider>
    </>
  );
}

export default App;
